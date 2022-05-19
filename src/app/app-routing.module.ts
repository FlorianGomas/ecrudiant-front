import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  {path: 'etudiants', component: AnnuaireComponent},
  {path: 'etudiant/:id', component: EtudiantComponent},
  {path: 'etudiant/:id/edit', component: EditFormComponent},
  {path: '**', redirectTo: '/etudiants'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
