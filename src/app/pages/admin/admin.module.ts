import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Admin } from './admin';

const routes: Routes = [{ path: '', component: Admin }];

@NgModule({
  declarations: [Admin], // <-- Declare aqui normalmente
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
