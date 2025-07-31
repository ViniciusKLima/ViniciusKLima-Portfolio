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
      nome: 'HTML',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      alt: 'logo-html',
    },
    {
      nome: 'CSS',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      alt: 'logo-css',
    },
    {
      nome: 'JavaScript',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'logo-javascript',
      estilos: { 'border-radius': '5px' },
    },
    {
      nome: 'TypeScript',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'logo-typescript',
      estilos: {
        'background-color': 'white',
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
