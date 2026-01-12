import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { PerfilComponent } from './sections/perfil/perfil.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ProjectsComponent } from './sections/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'experiencia', component: ExperienceComponent },
  { path: 'educacion', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];