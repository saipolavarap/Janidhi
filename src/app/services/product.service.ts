import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly products: Product[] = [
    {
      id: 'p1',
      name: 'Classic Tee',
      description: 'Soft cotton tee in classic fit',
      price: 19.99,
      imageUrl: 'https://picsum.photos/id/1059/600/400',
      category: 'Apparel',
      stock: 50
    },
    {
      id: 'p2',
      name: 'Eco Water Bottle',
      description: 'Stainless steel reusable bottle',
      price: 24.5,
      imageUrl: 'https://picsum.photos/id/1080/600/400',
      category: 'Accessories',
      stock: 100
    },
    {
      id: 'p3',
      name: 'Running Sneakers',
      description: 'Lightweight shoes for everyday runs',
      price: 79.0,
      imageUrl: 'https://picsum.photos/id/21/600/400',
      category: 'Footwear',
      stock: 20
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(200));
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id)).pipe(delay(150));
  }
}


