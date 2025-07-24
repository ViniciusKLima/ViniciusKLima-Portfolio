import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Curso {
  titulo: string;
  imagem: string;
  progresso: number;
  tecnologias?: string[];
  destaque?: string; // Nome da instituição/categoria
  corDestaque?: string; // Cor do destaque
}

@Component({
  selector: 'app-courses-modal',
  templateUrl: './courses-modal.html',
  styleUrls: ['./courses-modal.scss'],
  standalone: false,
})
export class CoursesModal {
  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();

  cursos: Curso[] = [
    {
      titulo: 'Desenvolvimento Frontend com Angular',
      imagem: 'images/certificado-frontend-angular-dio.jpg',
      progresso: 100,
      destaque: 'Dio',
      corDestaque: '#a7103d',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      ],
    },
    {
      titulo: 'Programação para Internet',
      imagem: 'images/certificado-estacio.jpg',
      progresso: 100,
      destaque: 'Estácio',
      corDestaque: '#1090a7',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ],
    },
    {
      titulo: 'Aplicativo GetMestres com Ionic',
      imagem: 'https://img-c.udemycdn.com/course/750x422/1996798_0808_4.jpg',
      progresso: 70,
      destaque: 'Udemy',
      corDestaque: '#8810a7',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      ],
    },
    {
      titulo: 'Projeto Completo React, React Native',
      imagem: 'https://img-c.udemycdn.com/course/750x422/4627320_9daf_2.jpg',
      progresso: 18,
      destaque: 'Udemy',
      corDestaque: '#8810a7',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        // React Native: usando Expo para diferenciar
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      ],
    },
    {
      titulo: 'Curso de JavaScript e TypeScript do básico ao avançado',
      imagem: 'https://img-c.udemycdn.com/course/750x422/2575266_c184_4.jpg',
      progresso: 0,
      destaque: 'Udemy',
      corDestaque: '#8810a7',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      ],
    },
    {
      titulo: 'Curso de Python 3 do básico ao avançado',
      imagem: 'https://img-c.udemycdn.com/course/750x422/2411816_3802_4.jpg',
      progresso: 0,
      destaque: 'Udemy',
      corDestaque: '#8810a7',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      ],
    },
  ];

  selectedImage: string | null = null;

  abrirImagem(imagem: string) {
    this.selectedImage = imagem;
  }

  fecharImagem() {
    this.selectedImage = null;
  }

  fecharModal() {
    this.closeModal.emit();
  }
}
