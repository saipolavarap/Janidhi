import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer-blue">
      <div class="footer-inner grid">
        <div class="brand-col">
          <div class="brand-mark">
            <svg width="140" height="44" viewBox="0 0 280 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="26" width="40" height="4" rx="2" fill="#fff"/>
              <circle cx="54" cy="44" r="18" stroke="#fff" stroke-width="6"/>
              <text x="86" y="53" fill="#fff" font-size="28" font-weight="700">JANIDHI</text>
            </svg>
          </div>
          <p class="muted">Best for a Limitless Product Inventory</p>
          <div class="payments">
            <span class="pay visa" title="VISA">V</span>
            <span class="pay mc" title="Mastercard">M</span>
            <span class="pay paypal" title="PayPal">P</span>
            <span class="pay amex" title="AmEx">A</span>
          </div>
          <div class="copyright">© {{ year }} Janidhi</div>
        </div>

        <div class="links-col">
          <h4>My Account</h4>
          <a routerLink="/about">About Us</a>
          <a routerLink="/privacy">Privacy Policy</a>
          <a routerLink="/terms">Terms & Conditions</a>
          <a routerLink="/shipping">Shipping & Returns</a>
        </div>

        <div class="contact-col">
          <h4>Contact Us</h4>
          <p>PRIME MARKET, New Delhi, India</p>
          <p>Call Us: <a href="tel:+91-9346779850">+91 9346779850</a></p>
          <p>Email: <a href="mailto:support@janidhi.com">support&commat;janidhi.com</a></p>
        </div>

        <div class="news-col">
          <h4>Newsletter</h4>
          <div class="news-form">
            <input placeholder="Enter Email Address"/>
            <button aria-label="Subscribe">➤</button>
          </div>
          <div class="socials">
            <a aria-label="Facebook">f</a>
            <a aria-label="Twitter">t</a>
            <a aria-label="Instagram">◎</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}


