import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

const STORAGE_KEY = 'app_cart_v1';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cartSubject = new BehaviorSubject<Cart>(this.loadInitialCart());
  readonly cart$ = this.cartSubject.asObservable();

  addItem(newItem: CartItem): void {
    const cart = this.cartSubject.getValue();
    const existing = cart.items.find(i => i.product.id === newItem.product.id);
    if (existing) {
      existing.quantity += newItem.quantity;
    } else {
      cart.items.push({ ...newItem });
    }
    this.updateCart(cart);
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity < 1) return;
    const cart = this.cartSubject.getValue();
    const target = cart.items.find(i => i.product.id === productId);
    if (!target) return;
    target.quantity = quantity;
    this.updateCart(cart);
  }

  removeItem(productId: string): void {
    const cart = this.cartSubject.getValue();
    cart.items = cart.items.filter(i => i.product.id !== productId);
    this.updateCart(cart);
  }

  clear(): void {
    this.updateCart({ items: [], subtotal: 0 });
  }

  private updateCart(cart: Cart): void {
    cart.subtotal = cart.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    this.cartSubject.next({ ...cart, items: [...cart.items] });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cartSubject.getValue()));
  }

  private loadInitialCart(): Cart {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Cart;
    } catch {
      // ignore corrupted storage
    }
    return { items: [], subtotal: 0 };
  }
}


