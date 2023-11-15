import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { Group } from '../model/group.model';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css'],
})
export class AddEtudiantComponent {
  newGrp: Group = new Group();
  groups: Group[] = this.studentServ.listGroups();
  newCin: number = 0;
  newEtu: Etudiant = new Etudiant();
  idgrpModified: number = 0;

  constructor(private studentServ: StudentService, private rout: Router) {}

  ajouterEtudiant() {
    this.newEtu.grp = this.studentServ.viewGroup(this.idgrpModified);
    this.groups = this.studentServ.listGroups();
    this.studentServ.addStudent(this.newEtu);
    this.rout.navigate(['etudiants']);
  }
}
