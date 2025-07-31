import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { DataService, Curso } from '../../services/data.service';

@Component({
  selector: 'app-courses-modal',
  templateUrl: './courses-modal.html',
  styleUrls: ['./courses-modal.scss'],
  standalone: false,
})
export class CoursesModal implements OnChanges, OnDestroy {
  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();

  cursos: Curso[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.cursos = this.dataService.getCursos();
  }

  selectedImage: string | null = null;

  abrirImagem(imagem: string) {
    this.selectedImage = imagem;
  }

  fecharImagem() {
    this.selectedImage = null;
  }

  fecharModal() {
    this.closeModal.emit();
  }

  ngOnChanges() {
    if (this.isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }
}
