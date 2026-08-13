import { Component } from '@angular/core';
import { AccordionComponent } from '../../shared/accordion/accordion.component';
import { CardComponent } from '../../shared/card/card.component';
import { CONTACTO, ILUSTRACIONES } from '../../shared/data';

@Component({
  selector: 'app-ilustrator',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './ilustrator.component.html',
  styleUrl: './ilustrator.component.css'
})

export class IlustratorComponent {
  data = CONTACTO;
  ilustraciones = ILUSTRACIONES

  imagenSeleccionada: string | null = null;

  abrirImagen(imagen: string) {
    this.imagenSeleccionada = imagen;
  }

  cerrarImagen() {
    this.imagenSeleccionada = null;
  }
}
