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

function toggleMenu() {
  document.body.classList.toggle("menu-open");
}

const verCurso = document.getElementById('opensectionCursosBtn');
const fecharCurso = document.getElementById('closeModalBtn');
const sectionCursos = document.getElementById('sectionCursos');
const conteudoGeral = document.getElementById('page-content');

let scrollY = 0;

verCursos.onclick = () => {
  scrollY = window.scrollY;
  conteudoGeral.style.position = 'fixed';
  conteudoGeral.style.top = `-${scrollY}px`;
  conteudoGeral.style.left = '0';
  conteudoGeral.style.right = '0';
  sectionCursos.style.display = 'flex';
};

fecharCursos.onclick = () => {
  conteudoGeral.style.position = '';
  conteudoGeral.style.top = '';
  conteudoGeral.style.left = '';
  conteudoGeral.style.right = '';
  sectionCursos.style.display = 'none';
  // volta pro scroll anterior sem puxar visualmente
  window.scrollTo({ top: scrollY, behavior: 'instant' });
};


