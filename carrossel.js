// Lista de projetos para mostrar no carrossel
const projetos = [
  {
    nome: "NutriFácil Web",
    descricao:
      "Este foi meu projeto web acadêmico, desenvolvido na faculdade com foco em facilitar o acesso a informações nutricionais. O NutriFácil Web oferece uma interface amigável onde usuários podem explorar diferentes tipos de dietas, entender seus benefícios e encontrar conteúdos voltados à alimentação saudável. Tudo isso em um site moderno e responsivo criado por mim do zero.",
    imagem: "img/foto.jpg",
    github: "https://github.com/seuusuario/projeto1",
    site: "https://seusite.com/projeto1",
  },
  {
    nome: "AçaíLândia",
    descricao:
      "AçaíLândia é um projeto pessoal que desenvolvi com o objetivo de praticar e aprimorar minhas habilidades em desenvolvimento web. Trata-se de um site demonstrativo para uma loja fictícia especializada em açaí, com um layout moderno e atrativo. O site apresenta o cardápio completo, diversas opções de açaí personalizável e seções com informações de contato, tudo pensado para simular a experiência real de um comércio local. Ideal para mostrar minha evolução em HTML, CSS e JavaScript.",
    imagem: "img/foto.jpg",
    github: "https://github.com/seuusuario/projeto2",
    site: "https://seusite.com/projeto2",
  },
  {
    nome: "NutriFácil Mobile",
    descricao:
      "Versão mobile mais atual do NutriFácil, este projeto acadêmico foi criado por mim com o objetivo de tornar o cuidado com a nutrição ainda mais acessível. O app permite que o usuário acompanhe sua rotina alimentar, registre refeições, metas e receba lembretes personalizados. Desenvolvido com foco em usabilidade e experiência do usuário, é o complemento perfeito da versão web.",
    imagem: "img/foto.jpg",
    github: "https://github.com/seuusuario/projeto3",
    site: "https://seusite.com/projeto3",
  },
  {
    nome: "Projeto 4",
    descricao: "Aplicação front-end com ótimo design.",
    imagem: "img/fot.jpg",
    github: "https://github.com/seuusuario/projeto4",
    site: "https://seusite.com/projeto4",
  },
];

// Elementos do DOM
const carrossel = document.getElementById("carrosselProjetos");
const slideTrack = document.getElementById("slideTrack");

// Variáveis de controle
let modoDetalhesAtivo = false; // se algum card está em modo detalhes
let isDown = false; // para detectar clique segurando no mouse
let startX; // posição inicial do clique no eixo X
let scrollLeft; // posição inicial do scroll do carrossel

// Função para pausar a animação só se não estiver em modo detalhes
function pausarAnimacao() {
  if (!modoDetalhesAtivo) {
    slideTrack.style.animationPlayState = "paused";
  }
}

// Função para retomar a animação só se não estiver em modo detalhes
function rodarAnimacao() {
  if (!modoDetalhesAtivo) {
    slideTrack.style.animationPlayState = "running";
  }
}

// Quando o mouse entra no carrossel, pausa o scroll automático (se não estiver em detalhes)
carrossel.addEventListener("mouseenter", () => {
  pausarAnimacao();
});

// Quando o mouse sai do carrossel, retoma o scroll automático (se não estiver em detalhes)
carrossel.addEventListener("mouseleave", () => {
  rodarAnimacao();
  isDown = false; // garante que o arrastar foi cancelado
  carrossel.classList.remove("active");
});

// Quando o botão do mouse é pressionado - inicia o scroll manual
carrossel.addEventListener("mousedown", (e) => {
  isDown = true;
  carrossel.classList.add("active");

  // Pega a posição inicial do mouse relativa ao carrossel
  startX = e.pageX - carrossel.offsetLeft;

  // Pega a posição inicial do scroll do carrossel
  scrollLeft = carrossel.scrollLeft;

  // Pausa a animação durante o scroll manual
  pausarAnimacao();
});

// Quando o mouse solta o botão - finaliza o scroll manual
carrossel.addEventListener("mouseup", () => {
  isDown = false;
  carrossel.classList.remove("active");

  // Só retoma a animação se não estiver em modo detalhes
  rodarAnimacao();
});

// Se o mouse sair do carrossel durante o clique, cancela o scroll manual
carrossel.addEventListener("mouseleave", () => {
  if (isDown) {
    isDown = false;
    carrossel.classList.remove("active");
    rodarAnimacao();
  }
});

// Movimento do mouse para scroll manual do carrossel
carrossel.addEventListener("mousemove", (e) => {
  if (!isDown) return; // só faz se estiver segurando o botão do mouse

  e.preventDefault();

  // Posição atual do mouse em relação ao carrossel
  const x = e.pageX - carrossel.offsetLeft;

  // Quanto o mouse se moveu do ponto inicial, multiplicado por fator de velocidade (2)
  const walk = (x - startX) * 2;

  // Atualiza o scroll do carrossel baseado nesse movimento
  carrossel.scrollLeft = scrollLeft - walk;
});

// Criar cards dos projetos no slideTrack, 2 vezes para efeito de loop
for (let i = 0; i < 2; i++) {
  projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.className = "projeto";

    card.innerHTML = `
        <div class="apresentacao itens">
          <div class="foto"><img src="${projeto.imagem}" alt="${projeto.nome}"></div>
          <h4>${projeto.nome}</h4>
          <p>${projeto.descricao}</p>
        </div>
        <div class="detalhes" style="display:none; flex-direction: column;">
          <h3>${projeto.nome}</h3>
          <div class="links">
            <a href="${projeto.github}" target="_blank">🔗 GitHub</a>
            <a href="${projeto.site}" target="_blank">🌐 Ver Site</a>
          </div>
          <button class="voltar">Voltar</button>
        </div>
      `;

    // Ao clicar no card, entra no modo detalhes (se não tiver nenhum aberto)
    card.addEventListener("click", () => {
      if (modoDetalhesAtivo) return;

      const apresentacao = card.querySelector(".apresentacao");
      const detalhes = card.querySelector(".detalhes");

      apresentacao.style.display = "none";
      detalhes.style.display = "flex";

      // Pausa o scroll automático
      slideTrack.style.animationPlayState = "paused";
      modoDetalhesAtivo = true;
    });

    // Botão "voltar" dentro da área de detalhes volta para a apresentação
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("voltar")) {
        e.stopPropagation();

        const apresentacao = card.querySelector(".apresentacao");
        const detalhes = card.querySelector(".detalhes");

        apresentacao.style.display = "flex";
        detalhes.style.display = "none";

        // Retoma o scroll automático se não estiver em scroll manual
        modoDetalhesAtivo = false;
        slideTrack.style.animationPlayState = "running";
      }
    });

    slideTrack.appendChild(card);
  });
}
