import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.html',
  styleUrls: ['./project-modal.scss'],
  standalone: false,
})
export class ProjectModal {
  @Input() projeto: any = null;
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  slideIndex = 0;

  fechar() {
    this.close.emit();
  }

  ngOnChanges() {
    this.slideIndex = 0;
  }

  proximaFoto(event: Event) {
    event.stopPropagation();
    if (this.projeto?.imagens?.length) {
      this.slideIndex = (this.slideIndex + 1) % this.projeto.imagens.length;
    }
  }

  fotoAnterior(event: Event) {
    event.stopPropagation();
    if (this.projeto?.imagens?.length) {
      this.slideIndex =
        (this.slideIndex - 1 + this.projeto.imagens.length) %
        this.projeto.imagens.length;
    }
  }
}
