import { Component, OnInit } from '@angular/core';
import { AboutService } from "../../../services/about.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-save-about',
  templateUrl: './save-about.component.html',
  styleUrls: ['./save-about.component.css']
})
export class SaveAboutComponent implements OnInit {

  public dataForm: FormGroup = this.builder.group({
    title: ["", Validators.required],
    description: ["", Validators.required]
  })

  constructor(
    private aboutService: AboutService,
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveAbout(){
    console.log(this.dataForm)
    if(this.dataForm.status == "VALID") {
      this.aboutService.saveAbout({...this.dataForm.value}).subscribe(
        result => this.router.navigate(["/admin/abouts"]),
        err => console.log(err)
      )
    } else {
      const span: HTMLElement|null = document.querySelector(".msgError");
      if(span) span.style.display = "block";
    }
  }

}
