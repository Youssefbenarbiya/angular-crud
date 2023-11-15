

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { Group } from '../model/group.model';
@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  tab_etu: Etudiant[];
  tab_grp: Group[];
  redoubleStyle = {'color':'red'}; 

  constructor(private studentServ: StudentService, private router: Router) {
    this.tab_etu = studentServ.listStudents();
    this.tab_grp = studentServ.listGroups();
  }

  ngOnInit(): void {
  }

  suppEtudiant(e: Etudiant) {
    let rep = confirm("Etes-vous sûr de vouloir supprimer l'étudiant " + e.nom + " " + e.prenom + "?");
    if (rep) {
      this.studentServ.delStudent(e);
      console.log("Suppression avec succès : " + e.nom);
    }
  }

  editEtudiant(cin: number) {
    this.router.navigate(['update-etudiant', cin]);
  }
}
