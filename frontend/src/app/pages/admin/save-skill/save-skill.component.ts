import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-save-skill',
  templateUrl: './save-skill.component.html',
  styleUrls: ['./save-skill.component.css']
})
export class SaveSkillComponent implements OnInit {

  public dataForm: FormGroup = this.builder.group({
    skill: ["", Validators.required],
    porcent: [0, [Validators.min(0), Validators.max(100)]]
  });

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
