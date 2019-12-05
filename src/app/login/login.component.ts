import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;


  ngOnInit() {
  
  }

  public username: string;
   public password: string;

   constructor(private router: Router) {
       this.username = "";
       this.password = "";
    }

   public submit(): void {
     if(this.username=="admin" && this.password=="admin" )
    this.router.navigate(['/LaptopList']);
   
}}
