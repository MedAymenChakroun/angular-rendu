import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Article, Emploi} from "../app/core/model/article";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path:"",redirectTo:"Articles",pathMatch:"full"
  },
  {
  path:"Articles",component:Article
  },
  {
  path:"Emplois",component:Emploi
  },
  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
