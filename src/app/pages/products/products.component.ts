import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable, map } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="section">
      <h2>All Products</h2>
      <div class="grid">
        <a class="card" *ngFor="let p of products$ | async" [routerLink]="['/product', p.id]">
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
export class ProductsComponent {
  products$: Observable<Product[]> = this.productService.getProducts().pipe(
    map(list => list.slice(0, 10))
  );

  constructor(private readonly productService: ProductService) {}
}


