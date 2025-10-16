import { Product } from './product.model';

export interface CartItem {
  product: Product;
  quantity: number; // must be >= 1
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
}


