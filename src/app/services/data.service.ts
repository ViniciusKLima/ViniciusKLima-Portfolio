import { Injectable } from '@angular/core';

export interface Projeto {
  nome: string;
  descricaoCurta: string;
  descricao: string;
  imagens: string[];
  github: string;
  site: string;
  video?: string;
  tecnologias?: string[];
}

export interface Curso {
  titulo: string;
  imagem: string;
  progresso: number;
  destaque: string;
  corDestaque: string;
  tecnologias: string[];
}

@Injectable({ providedIn: 'root' })
export class DataService {
  projetos: Projeto[] = [
    {
      nome: 'NutriFácil Web',
      descricaoCurta:
        'Descubra dietas, dicas e informações nutricionais em um site moderno, fácil de usar e totalmente responsivo.',
      descricao:
        'O NutriFácil Web é um projeto acadêmico que desenvolvi para facilitar o acesso a informações sobre alimentação saudável. Com uma interface intuitiva, o usuário pode explorar diferentes tipos de dietas, entender seus benefícios, acessar conteúdos exclusivos sobre nutrição e saúde, além de contar com recursos interativos e visual atraente. O site foi criado do zero, focando em acessibilidade, performance e experiência do usuário, sendo ideal para quem busca melhorar seus hábitos alimentares.',
      imagens: ['images/CapaNutriFacil-web.png'],
      github: 'https://github.com/ViniciusKLima/NutriFacil',
      site: 'https://viniciusklima.github.io/NutriFacil/',
      video: '', // Adicione este campo em todos
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ],
    },
    {
      nome: 'Açaí da Lane',
      descricaoCurta:
        'Site fictício de açaí com cardápio completo, personalização de pedidos e informações de contato para clientes.',
      descricao:
        'AçaíLândia é um projeto pessoal desenvolvido para aprimorar minhas habilidades em web. O site simula uma loja de açaí, trazendo cardápio detalhado, opções de personalização, área de contato e layout pensado para o público jovem. O projeto explora conceitos de UI/UX, responsividade, integração com redes sociais e uso de Tailwind CSS para estilização moderna. Ideal para quem deseja criar sites de comércio local com experiência realista.',
      imagens: ['images/CapaAcaiDaLane-web.png'],
      github: 'https://github.com/ViniciusKLima/acailandia',
      site: 'https://acailandia-demo.vercel.app',
      video: '', // Adicione este campo em todos
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      ],
    },
    {
      nome: 'NutriFácil App',
      descricaoCurta:
        'App mobile para acompanhamento da rotina alimentar, com registro de refeições e metas.',
      descricao:
        'Versão mobile mais atual do NutriFácil, este projeto acadêmico foi criado por mim com o objetivo de tornar o cuidado com a nutrição ainda mais acessível. O app permite que o usuário acompanhe sua rotina alimentar, registre refeições, metas e receba lembretes personalizados. Desenvolvido com foco em usabilidade e experiência do usuário, é o complemento perfeito da versão web.',
      imagens: [
        'images/CapaNutriFacil-app.png',
        // ...outras imagens
      ], // Alterado para array
      github: 'https://github.com/ViniciusKLima/nutrifacil-app',
      site: '',
      video: 'images/video1.mp4', // Adicione o link do vídeo
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.simpleicons.org/sass/CC6699', // Sass
      ],
    },
  ];

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

  getProjetos(): Projeto[] {
    return this.projetos;
  }

  getCursos(): Curso[] {
    return this.cursos;
  }
}
