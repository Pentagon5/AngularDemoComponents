import { Component } from '@angular/core';
import {Product} from './product'
import {ProductService} from"./product.service";
//Component Directive
@Component({
    selector: 'app-DI',
    providers:[ProductService],
    templateUrl: './product.component.html',
  styles:[`
  .one{background-color:orange}
  .tab{padding:10x;margin:15px;cursor:pointer}
  .panel{background-color:green}`]
})
export class ProductComponent {
   product:Product;
   product1:Product;
   //construtor level dependecy          (Component level Dependecy injection)
   constructor(ps:ProductService){
       console.log("Service is injected")
       this.product=ps.getProduct();
       this.product1=ps.getProduct1();
     
    }
}










