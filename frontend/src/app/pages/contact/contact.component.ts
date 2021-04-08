import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "../../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public dataForm: FormGroup = this.builder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required]
  })

  public validContact: boolean = false;

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
  }

  sendContact(){
    if(this.dataForm.status == "VALID"){
      this.contactService.saveContact({...this.dataForm.value}).subscribe(
        result => this.validContact = true,
        err => console.log(err)
      )
    } else {
      const msgError: HTMLElement|null = document.querySelector("#msgError");
      if(msgError) msgError.style.display = "block";
      console.log("pepe")
    }
  }

}
