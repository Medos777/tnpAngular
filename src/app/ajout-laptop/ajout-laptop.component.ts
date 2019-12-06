import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../Laptop.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-laptop',
  templateUrl: './ajout-laptop.component.html',
  styleUrls: ['./ajout-laptop.component.css']
})
export class AjoutLaptopComponent implements OnInit {
  libelle:string="";
  type:string="laptop";
  image:string='../assets/hp.jfif';
  prix:number;
 stock:boolean;
 date_fabrication:Date;
 quantity:number;
  marque: string;

  constructor(private router:Router,private LaptopService:LaptopService) { }
  onLaptopList()
 {
 this.router.navigate(['/laptop-list']);
 }

 ngOnInit() {
}

  onSubmit(f:NgForm)
 { 
  this.LaptopService.addpc(this.image,this.libelle,this.prix,this.stock,this.date_fabrication,this.quantity,this.type,this.marque);

}
onRetour()
  {
    this.router.navigate(['/LaptopList']);
  }
  

}
