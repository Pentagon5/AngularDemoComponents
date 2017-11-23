//Component Life Cycle
import { Component,Input,OnInit,OnChanges,DoCheck,OnDestroy} from '@angular/core';
  // Parent component
  @Component({
    selector: 'app-lifecycle',
    template: `
      <h1 class="container">Google Search:
          <input type="text" [(ngModel)]="search">
       </h1>
  
      <child [search]="search"></child>
    `
  })
  export class CompLifeCycleComponent {
    search: string = 'Computers';
  }
  
  //child component
  @Component({
    selector: 'child',
    template: `
    <h1 class='text-danger container'>Search Text</h1>
    <div class='well'>
     <h3 class='text-primary'>{{search}}</h3>
    </div>
      `
  })
  export class ChildComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
   
    @Input() search: string;
    /** search isn't initialized yet */
    constructor() {
      // inject service here
      console.log(`constructor: ${this.search}`);
    }
   ngOnInit() {
     // invoke service method for initial data
      console.log(`ngOnInit: ${this.search}`);
      // raise custom events 
    }
    /*Invoked every time an @Input() property changes via the data binding */
    ngOnChanges() {
     // invoke service method to handle changes
      console.log(`ngOnChanges: ${this.search}`);
    }  
    ngDoCheck() {
      // Write custom change detection strategy logic here
      console.log("ngDoCheck- Change detection strategy")
    }  
    ngOnDestroy() {
      // Remove the component state here
      console.log("Component Destroyed");
    }
  }
  