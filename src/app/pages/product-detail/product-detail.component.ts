import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="section" *ngIf="product$ | async as p">
      <div class="detail">
        <img class="detail-img" [src]="p.imageUrl" [alt]="p.name" />
        <div class="detail-body">
          <h2>{{ p.name }}</h2>
          <p class="price">{{ p.price | currency }}</p>
          <p class="desc">{{ p.description }}</p>
          <button (click)="addToCart(p)" class="btn">Add to Cart</button>
        </div>
      </div>
    </section>
  `,
})
export class ProductDetailComponent {
  product$: Observable<Product | undefined> = this.route.paramMap.pipe(
    switchMap(params => this.productService.getProductById(params.get('id') || ''))
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly cartService: CartService,
  ) {}

  addToCart(product: Product): void {
    this.cartService.addItem({ product, quantity: 1 });
  }
}


