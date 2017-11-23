import {Component} from '@angular/core';

@Component({
    selector:'app-custom-directive-test',
    template:`
    <h2 style='background-color:orange'>
      <u>Attribute Custom Directive Demo</u></h2>
    <h3 [myHidden] ="flag" style='background-color:lightblue'>
    <div>  <marquee><input type="button" value=" Welcome to Custom Attribute Directive" > </marquee>    </div>
    </h3>
    
    <br/>
    <h2><u>Style based Custom Directive Demo Pipes Demo</u></h2>
  <div style='background-color:yellow'>
     <h2>Enter Temperature</h2>
       <input type='text' [(ngModel)] = "temp">
       <button (click)="toggleFormat()">Toggle Format</button>
       <br/>
       <h3 style='background-color:lightgreen'>
          In {{targetFormat}} the temperature is
              {{ temp | temperature:format | number:'1.1-2'}}
       </h3>     
  </div>

    `
})

export class TestComponent{
    flag:boolean=false;    // try by changing value of flag   // this is for Hidden directive


// this code is for temperature pipe
temp: number=40;
toCelsius: boolean=true;
targetFormat: string ='Celsius';
format: string='FtoC';

toggleFormat(){   
  this.toCelsius = !this.toCelsius;
  this.format = this.toCelsius ? 'FtoC': 'CtoF';
  this.targetFormat = 
      this.toCelsius ?'Celsius' : 'Fahrenheit';
}    

}