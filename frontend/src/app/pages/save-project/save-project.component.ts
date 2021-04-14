import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProjectService } from "../../services/project.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.css']
})
export class SaveProjectComponent implements OnInit {

  public dataForm: FormGroup = this.builder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      github: ["", Validators.required],
      url: ["", Validators.required],
      inputTic: [""],
      tics: [[], [Validators.required, Validators.minLength(1)]]
  });

  public imageFile: File|undefined = undefined;

  constructor(
    private builder: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {
   }

  ngOnInit(): void {
  }

  addTic(){
    const tic = this.dataForm.value.inputTic;
    if(tic != ""){
      var tics = this.dataForm.value.tics;
      tics.push(tic)
      this.dataForm.get("tics")?.setValue(tics);
      this.dataForm.get("inputTic")?.setValue("");
    }
  }

  changeFile(event: any){
    const file: File = event.target.files[0];
    if(file){
      const imageHTML: HTMLElement|null = document.querySelector("#imageToProject");
      this.imageFile = file;
      if(imageHTML) imageHTML.setAttribute("src", URL.createObjectURL(this.imageFile));
    }
  }

  sendData(){
    if(this.dataForm.status == "VALID" && this.imageFile){
      var formData = new FormData();
      for(let i in this.dataForm.value){
        if(i != "inputTic") formData.append(i, this.dataForm.value[i]);
      }
      formData.append("image", this.imageFile, this.imageFile.name);
      this.projectService.saveProject(formData).subscribe(
        result => this.router.navigate(["/admin/briefcase"]),
        err => console.log(err)
      )
    } else {
      const span: HTMLElement|null = document.querySelector(".msgError");
      if(span) span.style.display = "block";
    }
  }

}
