const navbar = document.getElementById("navbar");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");

function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const verCursos = document.getElementById("verCursos");
const sectionCursos = document.getElementById("sectionCursos");
const conteudoGeral = document.getElementById("page-content");

let scrollY = 0;

class Curso {
  constructor(titulo, imagem, progresso) {
    this.titulo = titulo;
    this.imagem = imagem;
    this.progresso = progresso;
  }

  gerarHTML() {
    const div = document.createElement("div");
    div.className = "card-curso";
    div.innerHTML = `
          <img src="${this.imagem}" alt="${this.titulo}" />
          <h3>${this.titulo}</h3>
          <div class="barra">
            <div class="progresso" style="width: ${this.progresso}%;"></div>
          </div>
        `;
    return div;
  }
}

const cursos = [
  new Curso("HTML", "https://via.placeholder.com/300x200?text=HTML", 100),
  new Curso("JavaScript", "https://via.placeholder.com/300x200?text=JS", 70),
  new Curso("React", "https://via.placeholder.com/300x200?text=React", 45),
  new Curso("React", "https://via.placeholder.com/300x200?text=React", 45),
  new Curso("2React", "https://via.placeholder.com/300x200?text=React", 45),
  new Curso("3React", "https://via.placeholder.com/300x200?text=React", 45),
  new Curso("4React", "https://via.placeholder.com/300x200?text=React", 45),
];

function mostrarCursos() {
  const container = document.getElementById("content-cursos");
  container.innerHTML = `
        <div class="header-cursos">
          <h2 class="tt-h2">Meus Certificados</h2>
          <button id="fecharCursos">&times;</button>
        </div>
        <div class="grade-cursos" id="grade-cursos"></div>
      `;

  const grade = document.getElementById("grade-cursos");
  cursos.forEach((curso) => {
    grade.appendChild(curso.gerarHTML());
  });

  sectionCursos.style.display = "flex";

  // evento do botão de fechar
  document.getElementById("fecharCursos").onclick = fecharCursosFunc;
}

function fecharCursosFunc() {
  conteudoGeral.style.position = "";
  conteudoGeral.style.top = "";
  conteudoGeral.style.left = "";
  conteudoGeral.style.right = "";
  sectionCursos.style.display = "none";
}

verCursos.onclick = () => {
  window.scrollYref = window.scrollY;
  conteudoGeral.style.position = "fixed";
  conteudoGeral.style.top = `-${window.scrollYref}px`;
  conteudoGeral.style.left = "0";
  conteudoGeral.style.right = "0";
  mostrarCursos();
};
