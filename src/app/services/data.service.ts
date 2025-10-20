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
      nome: 'Meu Portfólio',
      descricaoCurta:
        'Website pessoal desenvolvido para apresentar minhas habilidades, projetos e trajetória profissional, com foco em design responsivo e experiência do usuário.',
      descricao:
        'Desenvolvi este portfólio como um projeto para centralizar minhas informações profissionais, exibir meus trabalhos e destacar minhas competências técnicas. O site foi construído com Angular, priorizando responsividade para diferentes dispositivos e uma navegação intuitiva. Durante o desenvolvimento, foquei na otimização de performance, boas práticas de código e recursos visuais atraentes, garantindo que o portfólio não fosse apenas uma vitrine, mas também um exemplo prático das minhas habilidades em desenvolvimento web.',
      imagens: ['images/CapaPortfolio.png'],
      github: 'https://github.com/ViniciusKLima/ViniciusKLima-Portfolio',
      site: '',
      video: '', 
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.simpleicons.org/sass/CC6699', // Sass
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
      ],
    },
    {
      nome: 'NutriFácil Web',
      descricaoCurta:
        'Descubra dietas, dicas e informações nutricionais em um site moderno, fácil de usar e totalmente responsivo.',
      descricao:
        '<strong class="destaque-vermelho" style="color: red;">Código em Manutenção!</strong><br> O NutriFácil Web é um projeto acadêmico que desenvolvi para facilitar o acesso a informações sobre alimentação saudável. Com uma interface intuitiva, o usuário pode explorar diferentes tipos de dietas, entender seus benefícios, acessar conteúdos exclusivos sobre nutrição e saúde, além de contar com recursos interativos e visual atraente. O site foi criado do zero, focando em acessibilidade, performance e experiência do usuário, sendo ideal para quem busca melhorar seus hábitos alimentares.',
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
        '<strong class="destaque-vermelho" style="color: red;">Código em Manutenção!</strong><br> AçaíLândia é um projeto pessoal desenvolvido para aprimorar minhas habilidades em web. O site simula uma loja de açaí, trazendo cardápio detalhado, opções de personalização, área de contato e layout pensado para o público jovem. O projeto explora conceitos de UI/UX, responsividade, integração com redes sociais e uso de Tailwind CSS para estilização moderna. Ideal para quem deseja criar sites de comércio local com experiência realista.',
      imagens: ['images/CapaAcaiDaLane-web.png'],
      github: 'https://github.com/ViniciusKLima/AcaiDaLane-web',
      site: 'https://viniciusklima.github.io/AcaiDaLane-web/',
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
        'images/img-nutrifacilAPP/1.png',
        'images/img-nutrifacilAPP/2.png',
        'images/img-nutrifacilAPP/3.png',
        'images/img-nutrifacilAPP/4.png',
        'images/img-nutrifacilAPP/5.png',
        'images/img-nutrifacilAPP/6.png',
        'images/img-nutrifacilAPP/7.png',
        'images/img-nutrifacilAPP/8.png',
        'images/img-nutrifacilAPP/9.png',
        // ...outras imagens
      ], // Alterado para array
      github: 'https://github.com/ViniciusKLima/nutrifacil-app',
      site: '',
      video: '', // Adicione o link do vídeo
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.simpleicons.org/sass/CC6699', // Sass
      ],
    },
    {
      nome: 'Controle Financeiro App',
      descricaoCurta:
        'App mobile para controle financeiro pessoal, com organização de dívidas e cartões de crédito.',
      descricao:
        'Este aplicativo de controle financeiro pessoal foi desenvolvido por mim como parte de um projeto acadêmico e nasceu da ideia de oferecer uma maneira prática e intuitiva de acompanhar as finanças. Todo o sistema de autenticação é integrado ao Firebase, garantindo uma experiência segura e confiável para os usuários. <br> Após o login, o usuário acessa uma tela inicial que organiza automaticamente suas dívidas por data de vencimento, permitindo uma visualização clara e objetiva do que precisa ser pago. Além disso, conta com um painel principal que reúne informações resumidas das dívidas e oferece atalhos para as principais funcionalidades. <br> O app também possui uma seção dedicada às categorias de dívidas, onde o usuário pode criar e personalizar conforme sua rotina, facilitando ainda mais o controle. Um dos diferenciais do projeto é a área exclusiva para cartões de crédito, que permite adicionar múltiplos cartões, acompanhar as faturas separadamente e registrar todos os gastos realizados. <br> Desenvolvido com foco em praticidade, personalização e clareza visual, este app foi pensado para ajudar qualquer pessoa a retomar o controle das suas finanças de forma simples e eficaz.',
      imagens: [
        'images/img-ControleFinanceiro/Frame 7.png',
        'images/img-ControleFinanceiro/Frame 8.png',
        'images/img-ControleFinanceiro/Frame 9.png',
        'images/img-ControleFinanceiro/Frame 10.png',
        'images/img-ControleFinanceiro/Frame 11.png',
        'images/img-ControleFinanceiro/IMG_3148.jpg',
        // ...outras imagens
      ], // Alterado para array
      github: 'https://github.com/ViniciusKLima/nutrifacil-app',
      site: '',
      //video: '',  Adicione o link do vídeo
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.simpleicons.org/sass/CC6699', // Sass
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      ],
    },
  ];

  cursos: Curso[] = [
    {
      titulo: 'Aplicativo GetMestres com Ionic',
      imagem: 'images/CertificadoIonicUdemy.jpg',
      progresso: 100,
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
      progresso: 30,
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
