import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { SearchEtudiantComponent } from './search-etudiant/search-etudiant.component';
const routes: Routes = [
{path: "etudiants", component : EtudiantsComponent},
{path: "add-etudiant", component : AddEtudiantComponent},
{path: "updateEtudiant/:num", component : UpdateEtudiantComponent},
{path:"search-etudiant", component:SearchEtudiantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
