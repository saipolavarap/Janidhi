import { CartItem } from './cart.model';

export interface Address {
  fullName: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  shippingAddress: Address;
  createdAt: string; // ISO string
}


