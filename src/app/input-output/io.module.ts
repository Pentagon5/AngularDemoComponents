import { NgModule } from '@angular/core';
import { CommonModule } from'@angular/common';
import{ StockComponent} from './inputbinding';
import{ OrderComponent} from './ordercomponent';
import{ SMSComponent} from './smscomponent';
import{ TimerComponent } from './timercomponent';

import{ PriceQuoterComponent,OutputComponent,MailComponent} from './outputbinding';

@NgModule({
    declarations: [
        OrderComponent,
        StockComponent,
        SMSComponent,
        TimerComponent,

        PriceQuoterComponent,
        OutputComponent,
        MailComponent
      ],
    imports: [CommonModule],
    exports:[
        OrderComponent,
        StockComponent,
        SMSComponent,
        TimerComponent,

        PriceQuoterComponent,
        OutputComponent,
        MailComponent
       ]
     })
  export class IOModule{}