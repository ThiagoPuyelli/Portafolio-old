import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SkillService } from "../../../services/skill.service";
import { Router } from "@angular/router"; 

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

  public imageFile: File|undefined

  constructor(
    private builder: FormBuilder,
    private skillService: SkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  changeFile(event: any){
    const file: File|undefined = event.target.files[0];
    if(file){
      this.imageFile = file;
      const img: HTMLElement|null = document.querySelector("#imgSkill");
      console.log(img)
      if(img) img.setAttribute("src", URL.createObjectURL(this.imageFile));
    }
  }

  submitSkill(){
    if(this.dataForm.status == "VALID" && this.imageFile){
      const formData = new FormData();
      const { skill, porcent } = this.dataForm.value
      formData.append("skill", skill);
      formData.append("porcent", porcent);
      formData.append("image", this.imageFile, this.imageFile.name);
      this.skillService.saveSkill(formData).subscribe(
        result => this.router.navigate(["/admin/skill"]),
        err => console.log(err)
      )
    } else {
      const span: HTMLElement|null = document.querySelector(".msgError");
      if(span) span.style.display = "block"
    }
  }

}
