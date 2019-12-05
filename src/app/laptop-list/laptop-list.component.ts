import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LaptopService} from '../Laptop.Service';
import { Pc } from '../pc';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})

export class LaptopListComponent implements OnInit {
pcs : Pc[]

  
    constructor(private activatedRouter:ActivatedRoute,private router:Router,private LaptopService:LaptopService) { }
  ngOnInit() {

    this.pcs= this.LaptopService.pc;
    
  }
  onRetour()
  {
    this.router.navigate(['/Login']);
  }

}
