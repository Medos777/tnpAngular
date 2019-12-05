import { Injectable } from '@angular/core';
import { Pc } from './pc';


@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  pc = [
    new Pc(123,'../assets/ad.jpg', 'ASUS ROG', 3099, true, new Date('2019-11-20'),10,'gaming_pc','ASUS'),
    new Pc(131,'../assets/AsusGX502GW.png','asus g531t', 7790, false, new Date('2019-11-27'),10,'gaming_pc','ASUS'),
    new Pc(141,'../assets/dell_x13.jpg', 'msi ps42', 3400, false, new Date('2018-11-19'),17,'laptop',"MSI"),
    new Pc(156,'../assets/msi-ps63.jpg','msi-ps63', 4049, true, new Date('2019-11-21'),25,'gaming_pc',"MSI"),
    new Pc(164,'../assets/asus-x541.jpg','asus-x541', 2035, true, new Date('2019-11-21'),13,'laptop',"ASUS"), 
    new Pc(179,'../assets/clavier.jpg','clavier mecanique', 300, true, new Date('2017-11-22'),100,'accessoir',"RAZE"),    
    new Pc(180,'../assets/GENESIS.png','GENESIS', 60, true, new Date('2018-01-26'),70,'accessoir',"GENESIS"), 
    new Pc(190,'../assets/HDMI-VGA.jpg','HDMI To VGA', 25, true, new Date('2018-11-21'),50,'accessoir',"WHITE LABEL"), 
    new Pc(200,'../assets/WIRELESS.jpg','WIRELESS', 49, true, new Date('2019-11-21'),100,'accessoir',"RAZER")
     
  ]
  public getPcByid(id:number)
  {
    var i:number;
      for(i=0;i<this.pc.length;i++)
      {
        if(id==this.pc[i].id)
        return this.pc[i];
      }
      return null;

  }
  public getPcBylibelle(libelle:string):boolean
  {
    var i:number;
    var test:boolean=false;
      for(i=0;i<this.pc.length;i++)
      {
        if(libelle==this.pc[i].libelle)
        test=true
      }
    {
       return test;
    }
  }
  

    public getLastId():number 
 {
  
    return this.pc[this.pc.length-1].id;
   
 }

 getEmployeByMatriculeServ(id : number):Pc
    {
      var k:number;
      for(k=0;k<this.pc.length;k++)
      {
        if(id==this.pc[k].id)
        return this.pc[k];
      }
      return null;

    }

  public addpc(image:string,libelle:string,prix:number,stock:boolean,date_fabrication:Date,quantity:number,type:string,marque:string)
  {
  let lap:Pc=new Pc (this.getLastId()+1,image,libelle,prix,stock,date_fabrication,quantity,type,marque);
  
    this.pc.push(lap);
  }

  
  public deletepc(libelle:string)
{
  if(this.getPcBylibelle(libelle)==false)
  {
    alert("libelle not found");
  }
  else
  {
  for(let i =0;i<this.pc.length;i++)
  {
    
if(this.pc[i].libelle==libelle)
{
this.pc.splice(i,1);
}
 }
}
  
  }

  public modif(prix:number)
  {
    for(let j=0;j<this.pc.length;j++)
    {
    this.pc[j].prix-=0.15*this.pc[j].prix;
  }
  
  }
  editerArticleServ(ido:number,id:number,image:string,libelle:string,prix:number,quantity:number,marque:string)
  {

    let pc:Pc=this.getEmployeByMatriculeServ(ido);

    
    if(id>=100 && id<1000)
    pc.id=id;

    

    if(image.length!=0)
    pc.image=image;

    if(libelle.length!=0)
    pc.libelle=libelle;

    if(prix!=null)
    pc.prix=prix;

    if(quantity!=null)
    pc.quantity=quantity;
    
    if(marque.length!=0)
    pc.marque=marque;
    


   
  }
  constructor() { }
}