import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../../services/contact.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts: Array<any> = [];

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.contactService.getContacts().subscribe(
      (result: any) => this.contacts = result,
      err => console.log(err)
    )
  }

}
