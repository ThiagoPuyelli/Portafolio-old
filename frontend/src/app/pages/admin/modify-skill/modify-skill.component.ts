import { Component, OnInit } from '@angular/core';
import { SkillService } from "../../../services/skill.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-modify-skill',
  templateUrl: './modify-skill.component.html',
  styleUrls: ['./modify-skill.component.css']
})
export class ModifySkillComponent implements OnInit {

  public skill: any;
  public dataForm: FormGroup = this.builder.group({
    skill: ["", Validators.required],
    porcent: [0, [Validators.min(0), Validators.max(100)]]
  });

  public imageFile: File|undefined;


  constructor(
    private skillService: SkillService,
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findSkill()
  }

  findSkill(){
    this.route.params.subscribe(
      params => {
        if(params.id){
          this.skillService.getSkill(params.id).subscribe(
            skill => {
              this.skill = skill
              for(let i in this.dataForm.value){
                this.dataForm.get(i)?.setValue(this.skill[i]);
              }
              console.log(this.skill.porcent)
            },
            err => console.log(err)
          )
        }
      }
    )
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
    if(this.dataForm.status == "VALID"){
      var info;
      if(this.imageFile){
        info = new FormData();
        const { skill, porcent } = this.dataForm.value
        info.append("skill", skill);
        info.append("porcent", porcent);
        info.append("image", this.imageFile, this.imageFile.name);
      } else {
        info = this.dataForm.value;
      }
      this.skillService.updateSkill(this.skill._id, info).subscribe(
        result => this.router.navigate(["/admin/skill"]),
        err => console.log(err)
      )
    } else {
      const span: HTMLElement|null = document.querySelector(".msgError");
      if(span) span.style.display = "block"
    }
  }

}
