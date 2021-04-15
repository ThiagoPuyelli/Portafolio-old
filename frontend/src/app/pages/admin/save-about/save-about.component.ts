import { Component, OnInit } from '@angular/core';
import { AboutService } from "../../../services/about.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
