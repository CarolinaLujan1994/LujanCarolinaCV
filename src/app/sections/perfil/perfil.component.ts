import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './perfil.component.html'
})

export class PerfilComponent {}