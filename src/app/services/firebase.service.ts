import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  getProjetos(): Observable<any[]> {
    const projetosRef = collection(this.firestore, 'projetos');
    return collectionData(projetosRef, { idField: 'id' });
  }

  addProjeto(projeto: any) {
    const projetosRef = collection(this.firestore, 'projetos');
    return addDoc(projetosRef, projeto);
  }

  updateProjeto(id: string, projeto: any) {
    const projetoRef = doc(this.firestore, 'projetos', id);
    return updateDoc(projetoRef, projeto);
  }

  deleteProjeto(id: string) {
    const projetoRef = doc(this.firestore, 'projetos', id);
    return deleteDoc(projetoRef);
  }
}
