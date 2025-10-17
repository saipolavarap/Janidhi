import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe, NgClass],
  template: `
    <div class="side-overlay" *ngIf="ui.sideMenuOpen$ | async" (click)="ui.closeSideMenu()"></div>
    <aside class="side-menu" [class.open]="(ui.sideMenuOpen$ | async) === true">
      <div class="side-header">
        <span>Menu</span>
        <button class="icon-btn" (click)="ui.closeSideMenu()">✕</button>
      </div>
      <nav class="side-links">
        <a routerLink="/dashboard" (click)="ui.closeSideMenu()">Dashboard</a>
        <a routerLink="/" (click)="ui.closeSideMenu()">Home</a>
        <a routerLink="/products" (click)="ui.closeSideMenu()">Products</a>
        <a routerLink="/cart" (click)="ui.closeSideMenu()">Cart</a>
      </nav>
    </aside>
  `,
})
export class SideMenuComponent {
  constructor(public readonly ui: UiService) {}
}


