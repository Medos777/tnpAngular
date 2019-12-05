import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../Laptop.Service';
import { Router } from '@angular/router';
import { NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {
  modifForm: FormGroup;
  constructor(private router:Router,private LaptopService:LaptopService,private formBuilder:FormBuilder) { }

  ngOnInit() {
      this.modifForm = this.formBuilder.group(
        {
        ido:['', [Validators.required,Validators.minLength(3)]],
        id: [''],
        image: ['../assets/WIRELESS.jpg'],
        libelle:[''],
        prix: [],
        quantity: [],
        marque: [''],
       
      
    
      
      }
      )
  }

 editerarticle()
  {
    console.log(this.LaptopService.getEmployeByMatriculeServ(this.modifForm.value['ido']));
    console.log(this.modifForm.value['ido']);

    if(this.LaptopService.getEmployeByMatriculeServ(this.modifForm.value['ido'])!=null)
    {

      
    this.LaptopService.editerArticleServ
    (
      this.modifForm.value['ido'],
      this.modifForm.value['id'],
      this.modifForm.value['image'],
      this.modifForm.value['libelle'],
      this.modifForm.value['prix'],
      this.modifForm.value['quantity'],
      this.modifForm.value['marque'],
      
      );
    this.router.navigate(['/LaptopList']);
    
   
  }
  

  }
  

}
