import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>© {{ year }} Janidhi</div>
        <nav class="footer-links">
          <a routerLink="/products">Products</a>
          <a routerLink="/cart">Cart</a>
          <a routerLink="/dashboard">Dashboard</a>
        </nav>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}


