import { Component, OnInit } from '@angular/core';
import { DataService, Projeto } from '../../services/data.service';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-listaProjetos',
  templateUrl: './listaProjetos.html', // Corrija aqui!
  styleUrls: ['./listaProjetos.scss'],
  standalone: false,
})
export class ListaProjetos implements OnInit {
  projetos: Projeto[] = [];
  selectedProjeto: Projeto | null = null;
  modalProjetoAberto = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.projetos = this.dataService.getProjetos();
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
