import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable, map } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero">
      <div>
        <h1>Shop smarter, look better</h1>
        <p>Discover curated products with delightful prices and fast checkout.</p>
        <div class="hero-actions">
          <a routerLink="/products" class="btn">Browse Products</a>
          <a routerLink="/cart" class="btn secondary">View Cart</a>
        </div>
      </div>
      <img class="hero-img" src="https://images.unsplash.com/photo-1520975867597-0f8d6fe16dbe?q=80&w=1200&auto=format&fit=crop" alt="Shopping" />
    </section>

    <section class="section">
      <h2>Featured Products</h2>
      <div class="grid">
        <a class="card" *ngFor="let p of featured$ | async" [routerLink]="['/product', p.id]">
          <img [src]="p.imageUrl" [alt]="p.name" />
          <div class="card-body">
            <h3>{{ p.name }}</h3>
            <p class="price">{{ p.price | currency }}</p>
          </div>
        </a>
      </div>
    </section>
  `,
})
export class HomeComponent {
  featured$: Observable<Product[]> = this.productService.getProducts().pipe(
    map(list => list.slice(0, 3))
  );

  constructor(private readonly productService: ProductService) {}
}


