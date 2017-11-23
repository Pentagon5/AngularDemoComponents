import { Component, Input } from '@angular/core';

@Component({
  selector: 'order-processor',
  template:`
   <h2 class="bg-primary"> Stock information</h2>
   <h2 class="text-danger container">
   Buying {{quantity}} shares of {{stockSymbol}}
   </h2>

   <sms-text [stockSymbol]="stockSymbol"></sms-text>
  `
})

//sms-text is child component of ordercomponent, we r passing stcok symbol value again to child
export class OrderComponent {
  @Input() quantity:number;
  private _stockSymbol:string;
  
  @Input()
  set stockSymbol(value:string){
      this._stockSymbol=value;
      if(this._stockSymbol!=undefined){
          console.log(`Sending a buy order to NASDAQ:  ${this._stockSymbol} -  ${this.quantity}`);
      }
  }
  get stockSymbol(): string{
      return this._stockSymbol;
  }
}
