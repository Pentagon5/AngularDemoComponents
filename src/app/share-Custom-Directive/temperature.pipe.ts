import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name:'temperature'})
export class TemperaturePipe implements PipeTransform{
    transform(value:number , fromTo:string):any{
        if(!fromTo){
            throw "temp pipe require partmeter FtoC or CtoF";
        }
        return(fromTo=='FtoC')? (value-32)*5.0/9.0: value*9.0/5.0+32;
    }
}