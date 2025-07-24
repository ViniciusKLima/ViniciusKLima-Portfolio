import { Component } from '@angular/core';

interface Skill {
  nome: string;
  imagem: string;
  alt: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
  standalone: false,
})
export class Skills {
  frontendSkills: Skill[] = [
    {
      nome: 'HTML',
      imagem: 'images/html.png',
      alt: 'HTML',
    },
    {
      nome: 'CSS',
      imagem: 'images/css.png',
      alt: 'CSS',
    },
    {
      nome: 'JavaScript',
      imagem: 'images/javascript.png',
      alt: 'JavaScript',
    },
    {
      nome: 'Angular',
      imagem: 'images/angular.png',
      alt: 'Angular',
    },
    {
      nome: 'React',
      imagem: 'images/react.png',
      alt: 'React',
    },
    {
      nome: 'Bootstrap',
      imagem: 'images/bootstrap.png',
      alt: 'Bootstrap',
    },
    {
      nome: 'Tailwind CSS',
      imagem: 'images/tailwind.png',
      alt: 'Tailwind CSS',
    },
  ];

  backendSkills: Skill[] = [
    {
      nome: 'TypeScript', // ← MOVIDO PARA BACKEND
      imagem: 'images/typescript.webp',
      alt: 'TypeScript',
    },
    {
      nome: 'Python',
      imagem: 'images/python.webp',
      alt: 'Python',
    },
    {
      nome: 'Node.js',
      imagem: 'images/node.png',
      alt: 'Node.js',
    },
    {
      nome: 'Java',
      imagem: 'images/java.webp',
      alt: 'Java',
    },
    {
      nome: 'C',
      imagem: 'images/c.png',
      alt: 'C',
    },
  ];

  ferramentasSkills: Skill[] = [
    {
      nome: 'Git',
      imagem: 'images/git.png',
      alt: 'Git',
    },
    {
      nome: 'GitHub',
      imagem: 'images/github.png',
      alt: 'GitHub',
    },
    {
      nome: 'VS Code',
      imagem: 'images/vscode.png',
      alt: 'VS Code',
    },
    {
      nome: 'Figma',
      imagem: 'images/figma.png',
      alt: 'Figma',
    },
  ];
}
