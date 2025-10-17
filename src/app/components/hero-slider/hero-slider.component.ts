import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero-slider">
      <div class="slides" [style.transform]="'translateX(' + (-activeIndex*100) + '%)'">
        <img *ngFor="let img of images" [src]="img" alt="Slide" />
      </div>
      <div class="dots">
        <button *ngFor="let _ of images; let i = index" [class.active]="i===activeIndex" (click)="go(i)"></button>
      </div>
    </div>
  `,
})
export class HeroSliderComponent {
  images = [
    'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1400&auto=format&fit=crop',
  ];
  activeIndex = 0;

  constructor(){
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 3500);
  }

  go(i: number){ this.activeIndex = i; }
}


