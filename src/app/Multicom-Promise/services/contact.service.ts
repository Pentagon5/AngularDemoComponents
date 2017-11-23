//injectable service
import {Injectable} from '@angular/core';
import {CONTACTS} from './mock-contact';
@Injectable()
export class ContactService{

    getContacts(){
        return Promise.resolve(CONTACTS);
// we r using immediate returning as data is local storage , not from server
//ES6 supports Promise which is wrapped by transscript
//Immediate Rerturning data with Promise
//not returning data we r returning only Promise pointer
    }
}