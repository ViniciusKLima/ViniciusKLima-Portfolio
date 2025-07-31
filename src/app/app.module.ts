import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

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
    FormsModule, // <-- Certifique-se que está aqui!
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
