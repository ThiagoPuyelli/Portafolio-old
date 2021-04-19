import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProjectService } from "../../../services/project.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.component.html',
  styleUrls: ['./modify-project.component.css']
})
export class ModifyProjectComponent implements OnInit {
  
  public dataForm: FormGroup = this.builder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      github: ["", Validators.required],
      url: ["", Validators.required],
      inputTic: [""],
      tics: [[], [Validators.required, Validators.minLength(1)]]
  });
  
  public imageFile: File|undefined = undefined;
  public project: any;
  
  constructor(
    private builder: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
   }
  
  ngOnInit(): void {
    this.findProject();
  }

  findProject(){
    this.route.params.subscribe(
      result => {
        if(result.id){
          this.projectService.getProject(result.id).subscribe(
            project => {
              this.project = project;
              var data = this.dataForm.value;
              for(let i in data){
                if(i != "inputTic") data[i] = this.project[i];
              }
              this.dataForm.setValue(data);
            },
            err => console.log(err)
          )
        }
      }
    )
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
    if(this.dataForm.status == "VALID"){
      var dataToSend;
      if(this.imageFile){
        var formData = new FormData();
        for(let i in this.dataForm.value){
          if(i != "inputTic") formData.append(i, this.dataForm.value[i]);
        }
        formData.append("image", this.imageFile, this.imageFile.name);
        dataToSend = formData;
      } else {
         const { tics, title, description, github, url } = this.dataForm.value;
         dataToSend = {
           tics, title, description, github, url
         };
      }

      this.projectService.modifyProject(dataToSend, this.project._id).subscribe(
        response => this.router.navigate(["/admin/briefcase"]),
        err => console.log(err)
      )
    } else {
      const span: HTMLElement|null = document.querySelector(".msgError");
      if(span) span.style.display = "block";
    }
  }

  deleteTic(value: string){
    const ticsValue: Array<string> = this.dataForm.value.tics
    for(let i in ticsValue){
      if(ticsValue[i] == value){
        ticsValue.splice(parseInt(i), 1);
      }
    }
    this.dataForm.get("tics")?.setValue(ticsValue);
    console.log(this.dataForm);
  }
  
}
