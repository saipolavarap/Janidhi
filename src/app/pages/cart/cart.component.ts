import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="section">
      <h2>Your Cart</h2>
      <div *ngIf="(cart$ | async) as cart; else empty">
        <div class="cart-item" *ngFor="let item of cart.items">
          <div class="title">{{ item.product.name }}</div>
          <div class="price">{{ item.product.price | currency }}</div>
          <input type="number" min="1" [value]="item.quantity" (change)="onQty(item.product.id, $any($event.target).value)" />
          <button (click)="remove(item.product.id)">Remove</button>
        </div>
        <div class="cart-summary">
          <div>Subtotal: <strong>{{ cart.subtotal | currency }}</strong></div>
          <a class="btn" routerLink="/checkout" [class.disabled]="cart.items.length === 0">Checkout</a>
        </div>
      </div>
      <ng-template #empty>
        <p>Your cart is empty.</p>
      </ng-template>
    </section>
  `,
})
export class CartComponent {
  cart$: Observable<Cart> = this.cartService.cart$;

  constructor(private readonly cartService: CartService) {}

  onQty(productId: string, value: string): void {
    const qty = Number(value);
    if (Number.isFinite(qty) && qty >= 1) {
      this.cartService.updateQuantity(productId, qty);
    }
  }

  remove(productId: string): void {
    this.cartService.removeItem(productId);
  }
}


