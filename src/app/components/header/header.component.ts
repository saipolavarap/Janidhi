import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="site-header header-blue">
      <div class="topbar">
        <div class="top-left">
          <button class="icon-btn ghost" (click)="ui.toggleSideMenu()" aria-label="Toggle menu">☰</button>
          <a routerLink="/" class="brand">
            <svg width="40" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <circle cx="6" cy="12" r="2.5" stroke="white"/>
              <text x="9" y="15" fill="white" font-size="8" font-weight="700">JANIDHI</text>
            </svg>
          </a>
        </div>
        <div class="search-wrap">
          <input class="search" placeholder="Search a Product" />
          <button class="search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="#64748b" stroke-width="2"/><path d="M20 20L17 17" stroke="#64748b" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div class="top-right">
          <a class="login-btn" routerLink="/login">Login</a>
          <button class="icon ghost" aria-label="Profile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3.5" stroke="white"/><path d="M4 20c1.5-3.5 5-5 8-5s6.5 1.5 8 5" stroke="white"/></svg>
          </button>
          <button class="icon ghost" aria-label="Wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20s-7-4.5-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.5-7 9-7 9z" stroke="white"/></svg>
          </button>
          <a class="icon ghost" routerLink="/cart" aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h2l2 12h10l2-8H7" stroke="white"/><circle cx="10" cy="20" r="1" fill="white"/><circle cx="18" cy="20" r="1" fill="white"/></svg>
          </a>
        </div>
      </div>

      <nav class="subnav">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/products">Car Audio <span class="caret">▾</span></a>
        <a routerLink="/products">Car Android <span class="caret">▾</span></a>
        <a routerLink="/products">Automotive Accessories <span class="caret">▾</span></a>
        <a routerLink="/products">Mobile Accessories <span class="caret">▾</span></a>
        <a routerLink="/products">Bike Audio</a>
        <a routerLink="/products">Medical Devices</a>
        <a routerLink="/products">Home Accessories <span class="caret">▾</span></a>
        <a routerLink="/products">Fashion <span class="caret">▾</span></a>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  constructor(public readonly ui: UiService) {}
}


