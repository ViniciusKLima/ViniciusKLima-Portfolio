import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'portfolio-angular';
  showCoursesModal = false;
  showNotification = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }

  // Função para scroll suave entre seções
  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      // Se for section1 (Home), vai para o topo da página
      if (sectionId === 'section1') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }

      // Para outras seções, usa o comportamento normal
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }

  openCoursesModal() {
    this.showCoursesModal = true;
    console.log('Abrir modal de cursos');
  }

  closeCoursesModal() {
    this.showCoursesModal = false;
  }

  showSuccessNotification() {
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }

  voltarParaHome() {
    this.router.navigate(['/']);
  }

  estaNaListaProjetos(): boolean {
    return this.router.url === '/projetos';
  }
}
