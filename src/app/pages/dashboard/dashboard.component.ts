import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { combineLatest, map, Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { Cart } from '../../models/cart.model';

interface DashboardViewModel {
  totalProducts: number;
  cartItems: number;
  subtotal: number;
  recentProducts: Product[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="section">
      <h2>Dashboard</h2>
      <div class="dash-grid">
        <div class="stat">
          <div class="stat-label">Products</div>
          <div class="stat-value">{{ (vm$ | async)?.totalProducts }}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Cart Items</div>
          <div class="stat-value">{{ (vm$ | async)?.cartItems }}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Subtotal</div>
          <div class="stat-value">{{ (vm$ | async)?.subtotal | currency }}</div>
        </div>
      </div>

      <h3 style="margin-top:20px">Recent Products</h3>
      <div class="grid">
        <a class="card" *ngFor="let p of (vm$ | async)?.recentProducts" [routerLink]="['/product', p.id]">
          <img [src]="p.imageUrl" [alt]="p.name" />
          <div class="card-body">
            <h4>{{ p.name }}</h4>
            <p class="price">{{ p.price | currency }}</p>
          </div>
        </a>
      </div>
    </section>
  `,
})
export class DashboardComponent {
  vm$: Observable<DashboardViewModel> = combineLatest([
    this.productService.getProducts(),
    this.cartService.cart$,
  ]).pipe(
    map(([products, cart]: [Product[], Cart]) => ({
      totalProducts: products.length,
      cartItems: cart.items.reduce((n, i) => n + i.quantity, 0),
      subtotal: cart.subtotal,
      recentProducts: [...products].slice(-10).reverse(),
    }))
  );

  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService,
  ) {}
}


