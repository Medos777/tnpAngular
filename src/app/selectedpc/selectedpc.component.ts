import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ LaptopService} from '../Laptop.service'
import { Pc } from '../pc';

@Component({
  selector: 'app-selectedpc',
  templateUrl: './selectedpc.component.html',
  styleUrls: ['./selectedpc.component.css']


})
export class SelectedpcComponent implements OnInit {
   pc: Pc
  constructor(private activatedRouter:ActivatedRoute, private LaptopService:LaptopService ,
  private router:Router)   { }
  ngOnInit() {
    let id= Number(this.activatedRouter.snapshot.params['id']);
    this.pc= this.LaptopService.getPcByid(id);
    console.log(id);
     
}
onRetour()
  {
    this.router.navigate(['/LaptopList']);
  }

}
