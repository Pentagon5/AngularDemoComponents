//http always return observable

import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Http} from '@angular/http';

//RXJS
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: "app-http",
    template: `
    <div class="container">
      <h2>Live Weather Forecast From OpenWeatherforecast</h2>
      
      City:<input type="text" [formControl]="searchInput">

      <h3 DecimalPlaces="2">Current Temperature in {{temperature }}F 
       & {{(((temperature - 32)*5)/9) | number:'2.1-2'}} C</h3>
      <h3>Humidity {{humidity}}%  & Pressure {{pressure}}% </h3>
      <h3>Temp_min {{temp_min}}   & Temp_max {{temp_max}} </h3>
     <h2 class="text-success">Status : {{description}}</h2>
     </div>
    `
})
export class WeatherComponent {
    private baseWeatherURL: string =
    'http://api.openweathermap.org/data/2.5/weather?q=';

    private urlSuffix: string =
    "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";
   // FormControl comes from ReactiveFormsModule
    searchInput: FormControl = new FormControl();
    temperature: string;
    description: string = '';
    humidity: string = '';
    pressure: string;
    temp_min:string;
    temp_max:string;
    
    constructor(private http: Http) {
        //Observable form       
        this.searchInput.valueChanges
            .debounceTime(4000)
            .switchMap((city: string) => this.getWeather(city))
            .subscribe(
            (res: any) => {
                this.description = res.weather[0].description;
                this.temperature = res.main.temp;
                this.humidity = res.main.humidity;
                this.pressure=res.main.pressure;
                this.temp_min=res.main.temp_min;
                this.temp_max=res.main.temp_max;
            },
            (err: any) =>console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url),
            () => console.log('made request to openweather map')
            );
    }
    ngOnInit() {
        this.searchInput.setValue("Jaipur");
    }
    //Ajax call here (write this code in service)
    getWeather(city: string): Observable<Array<string>> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .map((data:any) => {
                console.log(data);
                return data.json()
            });
    }
}
// end

