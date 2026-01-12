import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component'
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <main [@routeAnim]="o.isActivated && o.activatedRoute.routeConfig?.path" class="container">
      <router-outlet #o="outlet"></router-outlet>
    </main>
  `,
  styles: [`.container{max-width:1000px;margin:28px auto;padding:0 16px;}`],
  animations: [
    trigger('routeAnim', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateX(12px)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AppComponent { }