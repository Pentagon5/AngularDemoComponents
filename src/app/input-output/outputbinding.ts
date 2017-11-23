//output binding having child and parent component both in this same file....
//output binding having data flow from bottom to top...child->parent
import { Component, EventEmitter, Output, Input } from '@angular/core';
export interface IPriceQuote{
    stockSymbol:string;
    lastPrice:number;
}


//----------------------------------------------------------------------------------------------------
// Child component:-  priceQuoterComponent

@Component({
  selector: 'price-quote-child',
//   below is the html which is (inline html)  we can write external html as templateUrl also
  template: `
  <h3 class="well text-danger">
  Child PriceQuoterComponent:
        {{stockSymbol}} 
        {{price | currency:'USD':'1.2'}}
 </h3>
  `
} 
)//dollar upto 2 decimal places using pipe symbol


export class PriceQuoterComponent {
   @Output()
   lastPriceEvent: EventEmitter<IPriceQuote>= new EventEmitter();     //Ipricequote is a structure type
   stockSymbol:string="Verizon";
   price:number;

   constructor(){
       window.setInterval(()=>{
        let priceQuote:IPriceQuote={    //priceQuote is a structure  have stocksymbol and lastprice which changes every sec
          stockSymbol:this.stockSymbol,
          lastPrice:100*Math.random()
        };
            this.price=priceQuote.lastPrice;    // setting price value from lastprice which will be used by above inline html
            this.lastPriceEvent.emit(priceQuote); //raise event    //bubble to parent
       }, 1000);
   }
  }
//----------------------------------------------------------------------------------------------------



//Parent Event :- OutputComponent
@Component({
    selector: 'price-quote-parent',
  //   below is the html which is (inline html)  we can write external html as templateUrl also
    template: `
    <div class='container'>
    <h1 class='text-success'>
    Parent Component received: 
    {{stockSymbol}} {{price | currency:'USD':'1.2'}}
    </h1>
<price-quote-child (lastPriceEvent)="priceQuoteHandler($event)">
   </price-quote-child>   

   <app-mail  [info]="stockInfo"></app-mail> 
</div>
    `
  }  )
  //emiited value of lastpriceEvent is catch by this parent using handler
  //dollar upto 2 decimal places using pipe symbol , stockInfo is Json object sent to child ,app mail is one more child
 //app mail is another child
   
  export class OutputComponent{
      stockSymbol:string;
      price:number;
      stockInfo:IPriceQuote={'stockSymbol': '' , 'lastPrice':0};

      priceQuoteHandler(event:IPriceQuote){
          this.stockSymbol=event.stockSymbol;
          this.price=event.lastPrice;
          this.stockInfo=
          {'stockSymbol':event.stockSymbol, 'lastPrice':event.lastPrice};
      }

  }
//----------------------------------------------------------------------------------------------------



  // another child
  // Do it: Add MailComponent as child to root component
// and input data to display message information
@Component({
    selector: 'app-mail',
    template: `
    <div class='container'>
        <h3 class='text-primary'>
        Sent mail about {{info.stockSymbol}}
         and Stock value    {{info.lastPrice | currency:'USD':'1.2'}} 
         successfully.
           </h3>
    </div>
    `
})
export class  MailComponent {
    @Input() info:IPriceQuote;
}


