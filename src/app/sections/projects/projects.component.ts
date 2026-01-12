import { Component } from '@angular/core';
import { PROYECTOS } from '../../shared/data';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-projects',
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  proyectos = PROYECTOS;

}
