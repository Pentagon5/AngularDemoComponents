
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../services/contact';

@Component({
    selector: 'app-contact',
    providers: [ContactService],
    templateUrl:'./contactlist.component.html'
  })

export class ContactListComponent implements OnInit {
    public contacts: Contact[]
    public selected:any = {}
    
    constructor(private _contactService: ContactService) {
        console.log("Service Injected")
    }
    ngOnInit() {
        console.log("ngOnInit Fired and contacts injected")
        this.getContactDetails()// my local method...... which has method of servce
    }
    getContactDetails() { // local method having method of service
       this._contactService.getContacts()
         .then( (cnts:Contact[]) => {this.contacts = cnts})
    }
    selectedContact(contact: Contact) {
    console.log("selected contact name " + contact.name)
        this.selected = contact       
    }
}//end of code
