import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { Group } from '../model/group.model';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
})
export class UpdateEtudiantComponent implements OnInit {
  etudiantCourant: Etudiant = new Etudiant();
  idgrpModified: number = 0;
  groups: Group[] = [];

  constructor(private actRoute: ActivatedRoute, private studentServ: StudentService, private router: Router) {
    const cin = this.actRoute.snapshot.paramMap.get('num');
    if (cin) {
      const etudiant = this.studentServ.viewStudent(Number(cin));
      this.etudiantCourant = etudiant;
      this.idgrpModified = etudiant.grp.idgrp;
    }
  }

  ngOnInit(): void {
    this.groups = this.studentServ.listGroups();
  }

  modifEtudiant() {
    this.etudiantCourant.grp = this.studentServ.viewGroup(this.idgrpModified);
    this.studentServ.editStudent(this.etudiantCourant);
    console.log("Succès de modification étudiant " + this.etudiantCourant.cin + " - " + this.etudiantCourant.nom + " " + this.etudiantCourant.prenom + " - " + this.etudiantCourant.dateNaiss + " - " + this.etudiantCourant.moy);
    this.router.navigate(['etudiants']);
  }
}
