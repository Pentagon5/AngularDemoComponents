import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  styles:[`
  h3 {
    text-decoration:underline;
  }
  `]
})
export class StartComponent implements OnInit {
   time:any;
   name:string="";
   buttonStatus:boolean=false;
   titleStyle='red';
   model:any={email:'abhi@gmail.com'}  

  constructor() {
    window.setInterval(()=>{
      this.time=new Date().toString()
    },1000)
   }
 //hook
 //overwrite ngOnInit  as its interface
  ngOnInit() {
  console.log("Abhishek sharma");
  }

  Save(event:any){
    alert ("Ok... your points are redeemed ")
    this.buttonStatus=true;
  }

}
