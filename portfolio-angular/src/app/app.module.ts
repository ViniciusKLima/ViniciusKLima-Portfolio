import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { Skills } from './components/skills/skills';
import { Projetos } from './components/projetos/projetos';
import { Contato } from './components/contato/contato';
import { CoursesModal } from './components/courses-modal/courses-modal';
import { ProjectModal } from './components/project-modal/project-modal';
import { ListaProjetos } from './components/listaProjetos/listaProjetos';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Sobre,
    Skills,
    Projetos,
    Contato,
    CoursesModal,
    ProjectModal,
    ListaProjetos,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
