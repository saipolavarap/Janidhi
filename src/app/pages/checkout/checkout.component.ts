import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="section">
      <h2>Checkout</h2>
      <p>This is a demo checkout screen. Implement forms and payment here.</p>
      <a class="btn" routerLink="/">Back to Home</a>
    </section>
  `,
})
export class CheckoutComponent {}


