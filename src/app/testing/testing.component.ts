import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  template :`<h1>{{name}}</h1>` 
})
export class TestingComponent {
        name:string;

        constructor(){
            this.name='Murthy'
        }

}
