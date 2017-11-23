import { Component } from '@angular/core';
//StockComponent
@Component({
  selector: 'app-stock',
//   below is the html which is (inline html)  we can write external html as templateUrl also
  template: `
  <div class="text-center">
  <h1 class="bg-info"> Stock Exchange </h1>
  <input type ="text" height="40px" width="280px" 
  placeholder="Enter company " 
  (change)="onInputEvent($event)">
  <br/>

  <order-processor [stockSymbol]="stock" quantity="100"></order-processor>
  </div>

  <timer-comp> </timer-comp>
  `
})
// app-stock component child component is ordercomponent with value of "stock" passed in stockSymbol
//child component child component is timercomp
//parent component
export class StockComponent {
    stock:string;
    //this is event.target.value in javascript
    onInputEvent({target}:any):void{
     this.stock=target.value;
    }

}
