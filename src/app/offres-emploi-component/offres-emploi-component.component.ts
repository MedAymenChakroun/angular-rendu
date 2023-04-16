import { Component, OnInit } from '@angular/core';
import {Emploi} from "../core/model/article";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  constructor() { }
NbrOffres=0;
  ngOnInit(): void {
  }
  searchEntreprise="";
  listeEmploi:Emploi[]=
    [{  reference:" 1",titre:"TEST 1",entreprise:"EnT 1",etat:true},
      {  reference:" 2",titre:"TEST 2",entreprise:"EnT 2",etat:false},
      {  reference:" 3",titre:"TEST 3",entreprise:"EnT 3",etat:true}]

  CalculateOffers() {
      this.NbrOffres=this.listeEmploi.filter(obj => {
      if (obj.etat==true)
        return true;
      else
        return false;
    }).length;
      console.log(this.NbrOffres);
  }
}
