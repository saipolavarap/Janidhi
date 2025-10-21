import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer-orange">
      <!-- Janidhi Logo Section -->
      <div class="footer-logo-section">
        <div class="janidhi-logo">
          <svg width="200" height="60" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="40" width="60" height="6" rx="3" fill="#fff"/>
            <circle cx="80" cy="60" r="28" stroke="#fff" stroke-width="8"/>
            <text x="130" y="75" fill="#fff" font-size="42" font-weight="700" font-family="Arial, sans-serif">JANIDHI</text>
          </svg>
        </div>
      </div>

      <!-- Mission & Vision Section -->
      <div class="mission-vision-container">
        <div class="mission-vision-content">
          <div class="mission-section">
            <h3>Our Mission</h3>
            <p>To provide high-quality, natural products that promote health and wellness while supporting sustainable farming practices and empowering local communities.</p>
          </div>
          <div class="vision-section">
            <h3>Our Vision</h3>
            <p>To become the leading platform for authentic, farm-fresh products, creating a bridge between conscious consumers and trusted farmers across India.</p>
          </div>
        </div>
      </div>

      <!-- Links Section (Table style) -->
      <div class="footer-links-table">
        <table>
          <thead>
            <tr>
              <th>Quick Links</th>
              <th>Customer Care</th>
              <th>Support</th>
              <th>Legal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a routerLink="/">Home</a>
                <a routerLink="/track-order">Track Your Order</a>
              </td>
              <td>
                <a routerLink="/faq">FAQ</a>
                <a routerLink="/contact">Contact Information</a>
              </td>
              <td>
                <a routerLink="/shipping">Shipping Policy</a>
                <a routerLink="/refund">Refund Policy</a>
                <a routerLink="/cancellation">Cancellation Policy</a>
              </td>
              <td>
                <a routerLink="/privacy">Privacy Policy</a>
                <a routerLink="/terms">Terms of Service</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Copyright Section -->
      <div class="footer-bottom">
        <div class="copyright-info">
          <p>Copyright© {{ year }} Janidhi</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}


