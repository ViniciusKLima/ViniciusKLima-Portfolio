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
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      alt: 'HTML',
    },
    {
      nome: 'CSS',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      alt: 'CSS',
    },
    {
      nome: 'JavaScript',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
    },
    {
      nome: 'Angular',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      alt: 'Angular',
    },
    {
      nome: 'React',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React',
    },
    {
      nome: 'Bootstrap',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      alt: 'Bootstrap',
    },
    {
      nome: 'Tailwind CSS',
      imagem: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      alt: 'Tailwind CSS',
    },
    {
      nome: 'Ionic',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      alt: 'Ionic',
    },
  ];

  backendSkills: Skill[] = [
    {
      nome: 'TypeScript',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'TypeScript',
    },
    {
      nome: 'Node.js',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      alt: 'Node.js',
    },
    {
      nome: 'Python',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      alt: 'Python',
    },
  ];

  ferramentasSkills: Skill[] = [
    {
      nome: 'Git',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      alt: 'Git',
    },
    {
      nome: 'GitHub',
      imagem:
        'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png',
      alt: 'GitHub',
    },
    {
      nome: 'VS Code',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      alt: 'VS Code',
    },
    {
      nome: 'Figma',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      alt: 'Figma',
    },
    {
      nome: 'Firebase',
      imagem:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      alt: 'Firebase',
    },
  ];
}
