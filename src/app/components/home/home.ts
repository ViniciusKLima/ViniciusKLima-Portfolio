import { Component, Output, EventEmitter } from '@angular/core';

interface Tecnologia {
  nome: string;
  imagem: string;
  alt: string;
  estilos?: { [key: string]: string };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: false,
})
export class Home {
  @Output() openCourses = new EventEmitter<void>();

  tecnologias: Tecnologia[] = [
    {
      nome: 'Angular',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      alt: 'logo-angular',
    },
    {
      nome: 'Sass',
      imagem:
        'https://cdn.simpleicons.org/sass/CC6699',
      alt: 'logo-sass',
    },
    {
      nome: 'TypeScript',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'logo-typescript',
      estilos: { 'border-radius': '5px' },
    },
    {
      nome: 'Ionic',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      alt: 'logo-ionic',
      estilos: {
        'border-radius': '5px',
      },
    },
    {
      nome: 'Bootstrap',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      alt: 'logo-bootstrap',
      estilos: {
        'border-radius': '5px',
      },
    },
    {
      nome: 'Python',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      alt: 'logo-python',
    },
    {
      nome: 'Figma',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      alt: 'logo-figma',
    },
  ];

  showCoursesModal = false;

  onOpenCourses() {
    this.openCourses.emit();
  }

  openCoursesModal() {
    this.showCoursesModal = true;
  }

  showSuccessNotification() {
    // Exemplo: pode chamar um serviço ou mostrar uma mensagem
    alert('Enviado com sucesso!');
  }
}
