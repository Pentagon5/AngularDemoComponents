import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
//Attribute Directive
import { HiddenDirective } from './hidden.directive';
import {TestComponent} from './test.component';
import { TemperaturePipe } from './temperature.pipe';
@NgModule({
    declarations: [
        HiddenDirective, TestComponent,TemperaturePipe
      ],
    imports: [CommonModule, FormsModule],
    exports:[
        HiddenDirective, TestComponent,TemperaturePipe
       ]
     })
  export class ShareModule{}