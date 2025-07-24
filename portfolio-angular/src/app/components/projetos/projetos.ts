import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

interface Projeto {
  nome: string;
  descricao: string;
  imagens: string[]; // Alterado para array de strings
  github: string;
  site: string;
  tecnologias?: string[]; // Novo campo opcional
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.scss'],
  standalone: false,
})
export class Projetos implements AfterViewInit {
  @ViewChild('carrosselRef') carrosselRef!: ElementRef;

  canScrollLeft = false;
  canScrollRight = true;

  projetos: Projeto[] = [
    {
      nome: 'NutriFácil Web',
      descricao:
        'Este foi meu projeto web acadêmico, desenvolvido na faculdade com foco em facilitar o acesso a informações nutricionais. O NutriFácil Web oferece uma interface amigável onde usuários podem explorar diferentes tipos de dietas, entender seus benefícios e encontrar conteúdos voltados à alimentação saudável. Tudo isso em um site moderno e responsivo criado por mim do zero.',
      imagens: ['images/nutrifacil-web.jpeg'], // Alterado para array
      github: 'https://github.com/ViniciusKLima/nutrifacil-web',
      site: 'https://nutrifacil-web.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ],
    },
    {
      nome: 'AçaíLand',
      descricao:
        'AçaíLândia é um projeto pessoal que desenvolvi com o objetivo de praticar e aprimorar minhas habilidades em desenvolvimento web. Trata-se de um site demonstrativo para uma loja fictícia especializada em açaí. O site apresenta o cardápio completo, opções de açaí personalizável e seções com informações de contato, tudo pensado para simular a experiência real de um comércio local.',
      imagens: ['images/acailandia.png'], // Alterado para array
      github: 'https://github.com/ViniciusKLima/acailandia',
      site: 'https://acailandia-demo.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.simpleicons.org/tailwindcss/06B6D4', // Tailwind CSS (Simple Icons)
      ],
    },
    {
      nome: 'NutriFácil App',
      descricao:
        'Versão mobile mais atual do NutriFácil, este projeto acadêmico foi criado por mim com o objetivo de tornar o cuidado com a nutrição ainda mais acessível. O app permite que o usuário acompanhe sua rotina alimentar, registre refeições, metas e receba lembretes personalizados. Desenvolvido com foco em usabilidade e experiência do usuário, é o complemento perfeito da versão web.',
      imagens: [
        'images/nutrifacil-app-1.png',
        'images/nutrifacil-app-2.png',
        // ...outras imagens
      ], // Alterado para array
      github: 'https://github.com/ViniciusKLima/nutrifacil-app',
      site: 'https://nutrifacil-app-demo.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.simpleicons.org/sass/CC6699', // Sass
      ],
    },
    {
      nome: 'TaskFlow',
      descricao:
        'Sistema de gerenciamento de tarefas desenvolvido com Angular e TypeScript. Permite criar, editar e organizar tarefas por prioridade, com interface drag-and-drop e sistema de notificações. Implementei autenticação JWT, dashboard analytics e tema dark/light. Projeto focado em produtividade e UX moderna.',
      imagens: ['images/html.png'], // Alterado para array
      github: 'https://github.com/ViniciusKLima/taskflow',
      site: 'https://taskflow-demo.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      ],
    },
    {
      nome: 'WeatherNow',
      descricao:
        'Aplicação de previsão do tempo que consome APIs externas e exibe dados meteorológicos em tempo real. Desenvolvida com React e styled-components, inclui geolocalização automática, favoritos de cidades e gráficos interativos. Interface responsiva com animações suaves e design minimalista.',
      imagens: ['images/css.png'], // Alterado para array
      github: 'https://github.com/ViniciusKLima/weather-now',
      site: 'https://weather-now-demo.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      ],
    },
    {
      nome: 'EcommerceJS',
      descricao:
        'Plataforma de e-commerce completa com carrinho de compras, pagamento integrado e painel administrativo. Construída com Node.js, Express e MongoDB. Inclui sistema de avaliações, wishlist, cupons de desconto e relatórios de vendas. Arquitetura RESTful com documentação Swagger.',
      imagens: ['images/javascript.png'], // Alterado para array
      github: 'https://github.com/ViniciusKLima/ecommerce-js',
      site: 'https://ecommerce-js-demo.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ],
    },
    {
      nome: 'ChatBot AI',
      descricao:
        'Chatbot inteligente desenvolvido com Python e machine learning. Utiliza processamento de linguagem natural para compreender e responder perguntas dos usuários. Interface web moderna com WebSocket para comunicação em tempo real. Integração com APIs de IA e banco de dados para aprendizado contínuo.',
      imagens: ['images/python.webp'], // Alterado para array
      github: 'https://github.com/ViniciusKLima/chatbot-ai',
      site: 'https://chatbot-ai-demo.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ],
    },
    {
      nome: 'FinanceTracker',
      descricao:
        'Aplicativo de controle financeiro pessoal com categorização automática de gastos e relatórios detalhados. Desenvolvido com React Native para iOS e Android. Inclui gráficos interativos, metas de economia, sincronização na nuvem e notificações push para lembretes de pagamento.',
      imagens: ['images/react.png'], // Alterado para array
      github: 'https://github.com/ViniciusKLima/finance-tracker',
      site: 'https://finance-tracker-demo.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ],
    },
    {
      nome: 'DevPortfolio',
      descricao:
        'Template de portfólio responsivo para desenvolvedores, criado com HTML5, CSS3 e JavaScript vanilla. Design moderno com animações CSS, tema dark/light, seção de projetos dinâmica e formulário de contato funcional. Código limpo e bem documentado, ideal para personalização.',
      imagens: ['images/figma.png'], // Alterado para array
      github: 'https://github.com/ViniciusKLima/dev-portfolio',
      site: 'https://dev-portfolio-demo.vercel.app',
      tecnologias: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      ],
    },
  ];

  selectedProjeto: Projeto | null = null;
  modalProjetoAberto = false;

  ngAfterViewInit() {
    // Verificar estado inicial das setas
    setTimeout(() => {
      this.checkScrollButtons();
    }, 100);
  }

  flipCard(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const projeto = target.closest('.projeto');

    if (projeto) {
      projeto.classList.toggle('flipped');
    }
  }

  scrollLeft() {
    const container = this.carrosselRef.nativeElement;
    // ← MELHORADO: Scroll mais preciso baseado na largura real dos cards
    const cardWidth = 420; // Card (400px) + gap (20px)
    const scrollAmount = cardWidth;

    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const container = this.carrosselRef.nativeElement;
    // ← MELHORADO: Scroll mais preciso baseado na largura real dos cards
    const cardWidth = 420; // Card (400px) + gap (20px)
    const scrollAmount = cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }

  onScroll() {
    // Pequeno delay para aguardar o scroll terminar
    setTimeout(() => {
      this.checkScrollButtons();
    }, 50);
  }

  private checkScrollButtons() {
    const container = this.carrosselRef.nativeElement;

    // Verificar se pode scrollar para a esquerda
    this.canScrollLeft = container.scrollLeft > 0;

    // Verificar se pode scrollar para a direita
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    this.canScrollRight = container.scrollLeft < maxScrollLeft - 10; // Margem de 10px
  }

  abrirModalProjeto(projeto: Projeto) {
    this.selectedProjeto = projeto;
    this.modalProjetoAberto = true;
  }

  fecharModalProjeto() {
    this.modalProjetoAberto = false;
    this.selectedProjeto = null;
  }
}
