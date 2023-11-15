import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import {Group} from '../model/group.model';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {
    this.tab_etu = [
    { cin:111, nom:"Dridi", prenom:"Nawel", dateNaiss:new
    Date("09/27/2002"),moy:12.5, grp:{ idgrp:3, nomGrp:"DSI23",
    parcours:"Développement des Systèmes d'Information"}},
    { cin:222, nom:"Ben Hamda", prenom:"Sami", dateNaiss:new
    Date("11/04/2002"),moy :14.25, grp:{ idgrp:5, nomGrp:"SEM21",
    parcours:"Systèmes Embarqués et Mobiles"}},
    { cin:333, nom:"Zaier",moy :6, prenom:"Manel", dateNaiss:new
    Date("02/15/2001"), grp:{ idgrp:1, nomGrp:"DSI21",
    parcours:"Développement des Systèmes d'Information"}},
    { cin:444, nom:"Fourati", prenom:"Iyed", dateNaiss:new
    Date("06/24/2001"), moy:9.88, grp:{ idgrp:4, nomGrp:"RSI21",
    parcours:"Réseaux et Systèmes Informatiques"}}
    ]
    this.tab_grp = [
    { idgrp:1, nomGrp:"DSI21", parcours:"Développement des Systèmes d'Information"},
    { idgrp:2, nomGrp:"DSI22", parcours:"Développement des Systèmes d'Information"},
    { idgrp:3, nomGrp:"DSI23", parcours:"Développement des Systèmes d'Information"},
    { idgrp:4, nomGrp:"RSI21", parcours:"Réseaux et Systèmes Informatiques"},
    { idgrp:5, nomGrp:"SEM21", parcours:"Systèmes Embarqués et Mobiles"}
    ]
    }
  tab_grp: Group[] = [];
  private tab_etu: Etudiant[] = [];

  listStudents(): Etudiant[] {
    return this.tab_etu;
  }

  addStudent(etudiant: Etudiant) {
    this.tab_etu.push(etudiant);
    console.log("Added student: " + etudiant.nom);
  }

  delStudent(etudiant: Etudiant) {
    const index = this.tab_etu.indexOf(etudiant);
    if (index > -1) {
      this.tab_etu.splice(index, 1);
      console.log("Deleted student: " + etudiant.nom);
    }
  }

  viewStudent (num : number) : Etudiant {
    return this.tab_etu.find(e => e.cin==num)!
    }

  editStudent(updatedStudent: Etudiant) {
    const index = this.tab_etu.findIndex((student) => student.cin === updatedStudent.cin);
  
    if (index !== -1) {
    
      console.log('Editing student with CIN: ' + updatedStudent.cin);
      this.tab_etu.splice(index, 1);
      this.tab_etu.push(updatedStudent);
    }
  }
  listGroups(): Group[] {
    return this.tab_grp;
  }
  viewGroup(num : number) : Group {
    return this.tab_grp.find(e => e.idgrp==num)!
     }
  
}
