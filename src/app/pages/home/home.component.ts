import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable, map } from 'rxjs';
import { Product } from '../../models/product.model';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider.component';
import { CategoryPipe } from '../../pipes/category.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroSliderComponent, CategoryPipe],
  template: `
    <section class="hero hero--single">
      <div>
        <h1>Your Life Span is the Only One That Matters.</h1>
        <p>Rediscover the food culture and habits that reject chemicals, preservatives, and the cost of a shorter, modern life.</p>
        <!--<div class="hero-actions">
          <a routerLink="/products" class="btn">Browse Products</a>
          <a routerLink="/cart" class="btn secondary">View Cart</a>
        </div>-->
      </div>
    </section>

    <app-hero-slider></app-hero-slider>

    <section class="section">
      <div class="tabs">
        <button *ngFor="let c of categories" (click)="activeCategory=c" [class.active]="activeCategory===c">{{ c }}</button>
      </div>
      <h2 style="margin-top:8px">Featured Products</h2>
      <div class="grid grid-5">
        <div class="card" *ngFor="let p of (featured$ | async) | category:activeCategory">
          <img [src]="p.imageUrl" [alt]="p.name" />
          <div class="card-body">
            <h3>{{ p.name }}</h3>
            <p class="price">{{ p.price | currency }}</p>
            <div class="qty">
              <button (click)="dec(p.id)">-</button>
              <span>{{ quantities[p.id] || 1 }}</span>
              <button (click)="inc(p.id)">+</button>
            </div>
            <a class="btn" [routerLink]="['/product', p.id]">View</a>
          </div>
        </div>
      </div>
    
  `,
})
export class HomeComponent {
  featured$: Observable<Product[]> = this.productService.getProducts().pipe(
    map(list => list.slice(0, 10))
  );
  categories: string[] = ['All', 'Apparel', 'Accessories', 'Footwear'];
  activeCategory = 'All';
  quantities: Record<string, number> = {};

  constructor(private readonly productService: ProductService) {}

  inc(id: string){ this.quantities[id] = (this.quantities[id] || 1) + 1; }
  dec(id: string){ const next = (this.quantities[id] || 1) - 1; this.quantities[id] = next < 1 ? 1 : next; }
}


