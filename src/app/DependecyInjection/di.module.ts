import { NgModule } from '@angular/core';
import { CommonModule } from'@angular/common';
import {FormsModule} from '@angular/forms';

import { ProductComponent } from'./product.component';
import { ProductService } from'./product.service';

@NgModule({
    declarations: [ProductComponent],
    imports: [CommonModule,FormsModule],
    exports:[ProductComponent],
    //providers: [ProductService]        its Module level Dependency injection
      })
  export class DIModule{}