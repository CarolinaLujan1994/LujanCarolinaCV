// contacto.component.ts
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CONTACTO } from '../../shared/data';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  data = CONTACTO;
}