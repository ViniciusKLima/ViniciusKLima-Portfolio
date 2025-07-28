import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.scss'],
  standalone: false,
})
export class Sobre {
  @Output() abrirModalCursos = new EventEmitter<void>();

  abrirCursos() {
    this.abrirModalCursos.emit();
  }
}
