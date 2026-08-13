import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CERTIFICACIONES, EDUCACION } from '../../shared/data';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../../shared/accordion/accordion.component";

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CardComponent, CommonModule, AccordionComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent {
  educacion = EDUCACION;
  certificaciones = CERTIFICACIONES;

/*   imagenAmpliada: string | null = null

  ampliarImagen(route: string) {
    this.imagenAmpliada = route
  }

  cerrarModal() {
    this.imagenAmpliada = null;
  } */

}