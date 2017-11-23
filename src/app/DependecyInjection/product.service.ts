import {Injectable} from '@angular/core';
import {Product} from './product'

@Injectable()    // for dependency injection
export class ProductService{
//service  Get, Post,Put,delete  methods can be called
    getProduct():Product{
        return new Product(1,"iPhone9",80000,"the upcoming model of IPhone");
      }
   getProduct1():Product{
    return new Product(2,"iPhone10",90000,"the 2nd upcoming model of IPhone");
      }
       
}