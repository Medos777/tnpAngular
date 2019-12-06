import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../Laptop.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-pc',
  templateUrl: './delete-pc.component.html',
  styleUrls: ['./delete-pc.component.css']
})
export class DeletePcComponent implements OnInit {
  libelle:string;
 
 
  constructor(private router:Router,private LaptopService:LaptopService) { }

  ngOnInit() {
  }
  onSubmit(f:NgForm)
  { 
   this.LaptopService.deletepc(this.libelle);
 }
 onRetour()
  {
    this.router.navigate(['/LaptopList']);
  }

}
