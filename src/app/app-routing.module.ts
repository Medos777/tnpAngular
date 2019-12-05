import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { Error404Component } from './error404/error404.component';
import { AjoutLaptopComponent } from './ajout-laptop/ajout-laptop.component';
import { SelectedpcComponent } from './selectedpc/selectedpc.component';
import { DeletePcComponent } from './delete-pc/delete-pc.component';
import { ModifComponent } from './modif/modif.component';  
const routes: Routes = [
  {path:'myMenu', component:MenuComponent}, 
  {path:'Login', component:LoginComponent},
  {path:'LaptopList', component:LaptopListComponent},
  {path:'Deletepc', component:DeletePcComponent},
{path:'SelectedPc/:id', component:SelectedpcComponent},
  {path:'AjoutLaptop', component:AjoutLaptopComponent},
  {path:'Modif',component:ModifComponent},
  {path:'', redirectTo:'Login', pathMatch:'full'},
  {path:'**', component:Error404Component} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
