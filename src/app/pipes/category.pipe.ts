import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({ name: 'category', standalone: true })
export class CategoryPipe implements PipeTransform {
  transform(products: Product[] | null | undefined, active: string): Product[] {
    if (!products || !Array.isArray(products)) return [];
    if (!active || active === 'All') return products;
    return products.filter(p => (p.category || '').toLowerCase() === active.toLowerCase());
  }
}


