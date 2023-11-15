import {Group} from './group.model';

export class Etudiant {
    cin!: number;
    nom!: string;
    prenom!: string;
    dateNaiss!: Date ;
    moy!: number;
    grp!: Group;
}