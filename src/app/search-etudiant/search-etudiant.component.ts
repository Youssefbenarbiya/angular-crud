import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { Group } from '../model/group.model';
@Component({
  selector: 'app-search-etudiant',
  templateUrl: './search-etudiant.component.html',
  styleUrls: ['./search-etudiant.component.css']
})
export class SearchEtudiantComponent {
parseFloat(arg0: string): number {
throw new Error('Method not implemented.');
}
  constructor(private studentServ:StudentService) {
    this.list_etu = studentServ.listStudents()
    }
    ngOnInit(){
      this.list_grp = this.studentServ.listGroups()
      }
  list_etu: Etudiant[] = [];
  nomEtu: string = "";
  list_grp : Group[] = [];
  list_moy : number[] = [];
  grpidRech : number = 0;
  critere : string = "nom";
  moyenne: number = 0;

  chercherParNom (name : string){
    this.list_etu = this.studentServ.listStudents()
    this.list_etu = this.list_etu.filter(e => e.nom.toLowerCase().includes(name.toLowerCase()));
    }
    chercherParGrp(){
      this.list_etu = this.studentServ.listStudents()
      if(this.grpidRech != 0)
        this.list_etu = this.list_etu.filter(e => e.grp.idgrp == this.grpidRech);
    }
    chercherParMoy(moyenne: string) {
      const moy = parseFloat(moyenne);
      this.list_etu = this.studentServ.listStudents();
   
        this.list_etu = this.list_etu.filter(e => e.moy >= moy);
    
    }
    chercherParDateNaissance(dateNaissance: string) {
      this.list_etu = this.studentServ.listStudents();
      
      if (dateNaissance) {
        this.list_etu = this.list_etu.filter(e => {
          const studentDOB = new Date(e.dateNaiss);
          return studentDOB.toISOString().split('T')[0] === dateNaissance;
        });
      } else {
        console.error("Invalid dateNaissance input");
      }
    }
    
    
}
