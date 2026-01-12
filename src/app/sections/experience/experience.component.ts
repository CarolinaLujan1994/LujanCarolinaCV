
import { Component } from '@angular/core';
import { AccordionComponent } from '../../shared/accordion/accordion.component';
import { CardComponent } from '../../shared/card/card.component';
import { EXPERIENCIA, OTRASEXPERIENCIAS } from '../../shared/data';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [AccordionComponent, CardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})

export class ExperienceComponent {
  experiencia = EXPERIENCIA;
  otrasExperiencias = OTRASEXPERIENCIAS;
}