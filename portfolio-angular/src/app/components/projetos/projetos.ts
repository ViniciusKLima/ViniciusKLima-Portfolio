import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { DataService, Projeto } from '../../services/data.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.scss'],
  standalone: false,
})
export class Projetos implements AfterViewInit, OnInit {
  @ViewChild('carrosselRef') carrosselRef!: ElementRef;

  canScrollLeft = false;
  canScrollRight = true;

  projetos: Projeto[] = [];
  selectedProjeto: Projeto | null = null;
  modalProjetoAberto = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.projetos = this.dataService.getProjetos();
  }

  ngAfterViewInit() {
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
    const cardWidth = 420;
    const scrollAmount = cardWidth;

    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const container = this.carrosselRef.nativeElement;
    const cardWidth = 420;
    const scrollAmount = cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }

  onScroll() {
    setTimeout(() => {
      this.checkScrollButtons();
    }, 50);
  }

  private checkScrollButtons() {
    const container = this.carrosselRef.nativeElement;
    this.canScrollLeft = container.scrollLeft > 0;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    this.canScrollRight = container.scrollLeft < maxScrollLeft - 10;
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
