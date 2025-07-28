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
  prevIndex = 0;
  nextIndex = 0;
  assistirVideo = false;

  fechar() {
    this.close.emit();
  }

  ngOnChanges() {
    this.slideIndex = 0;
    if (this.visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const track = document.querySelector('.carousel-track') as HTMLElement;
      if (track && this.projeto?.imagens?.length) {
        track.style.setProperty(
          '--num-imgs',
          this.projeto.imagens.length.toString()
        );
      }
    });
  }

  updateIndexes() {
    const total = this.projeto?.imagens?.length || 1;
    this.prevIndex = (this.slideIndex - 1 + total) % total;
    this.nextIndex = (this.slideIndex + 1) % total;
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
