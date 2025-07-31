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
      imagem: 'images/html.png',
      alt: 'logo-html',
    },
    {
      nome: 'CSS',
      imagem: 'images/css.png',
      alt: 'logo-css',
    },
    {
      nome: 'JavaScript',
      imagem: 'images/javascript.png',
      alt: 'logo-javascript',
      estilos: { 'border-radius': '5px' },
    },
    {
      nome: 'TypeScript',
      imagem: 'images/typescript.webp',
      alt: 'logo-typescript',
      estilos: {
        'background-color': 'white',
        'border-radius': '5px',
      },
    },
    {
      nome: 'Python',
      imagem: 'images/python.webp',
      alt: 'logo-python',
    },
    {
      nome: 'Figma',
      imagem: 'images/figma.png',
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
