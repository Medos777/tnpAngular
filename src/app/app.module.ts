import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { Error404Component } from './error404/error404.component';
import { AjoutLaptopComponent } from './ajout-laptop/ajout-laptop.component';
import { SelectedpcComponent } from './selectedpc/selectedpc.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DeletePcComponent } from './delete-pc/delete-pc.component';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModifComponent } from './modif/modif.component';
import { FooterComponent } from './footer/footer.component';   

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    LaptopListComponent,
    Error404Component,
    AjoutLaptopComponent,
    SelectedpcComponent,
    DeletePcComponent,
    ModifComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,NgxPaginationModule,Ng2SearchPipeModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
