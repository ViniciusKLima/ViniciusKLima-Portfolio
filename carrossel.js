const projetos = [
  {
    nome: "NutriFácil Web",
    descricao:
      "Este foi meu projeto web acadêmico, desenvolvido na faculdade com foco em facilitar o acesso a informações nutricionais. O NutriFácil Web oferece uma interface amigável onde usuários podem explorar diferentes tipos de dietas, entender seus benefícios e encontrar conteúdos voltados à alimentação saudável. Tudo isso em um site moderno e responsivo criado por mim do zero.",
    imagem: "img/nutrifacil-web.jpeg",
    github: "https://github.com/projeto1",
    site: "https://site1.com",
  },
  {
    nome: "AçaíLand",
    descricao: "AçaíLândia é um projeto pessoal que desenvolvi com o objetivo de praticar e aprimorar minhas habilidades em desenvolvimento web. Trata-se de um site demonstrativo para uma loja fictícia especializada em açaí. O site apresenta o cardápio completo, opções de açaí personalizável e seções com informações de contato, tudo pensado para simular a experiência real de um comércio local.",
    imagem: "img/acailandia.png",
    github: "https://github.com/projeto2",
    site: "https://site2.com",
  },
  {
    nome: "NutriFácil App",
    descricao: "Versão mobile mais atual do NutriFácil, este projeto acadêmico foi criado por mim com o objetivo de tornar o cuidado com a nutrição ainda mais acessível. O app permite que o usuário acompanhe sua rotina alimentar, registre refeições, metas e receba lembretes personalizados. Desenvolvido com foco em usabilidade e experiência do usuário, é o complemento perfeito da versão web.",
    imagem: "img/nutrifacil-app.png",
    github: "https://github.com/projeto2",
    site: "https://site2.com",
  },
];

const slideTrack = document.getElementById("slideTrack");

projetos.forEach((projeto) => {
  const card = document.createElement("div");
  card.className = "projeto";

  card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
            <div class="foto"><img src="${projeto.imagem}" alt="${projeto.nome}"></div>
            <h4>${projeto.nome}</h4>
            <p>${projeto.descricao}</p>
          </div>
          <div class="card-back">
            <h3>${projeto.nome}</h3>
            <div class="links">
              <a href="${projeto.github}" target="_blank">🔗 GitHub</a>
              <a href="${projeto.site}" target="_blank">🌐 Ver Site</a>
            </div>
          </div>
        </div>
      `;

  // Alternar flip no clique
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  slideTrack.appendChild(card);
});

// Scroll horizontal com mouse
const slide = document.querySelector(".slide");
slide.addEventListener("wheel", (e) => {
  const hasHorizontalScroll = slide.scrollWidth > slide.clientWidth;
  if (hasHorizontalScroll) {
    e.preventDefault();
    slide.scrollLeft += e.deltaY;
  }
});
