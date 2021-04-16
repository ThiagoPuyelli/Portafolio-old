import { Component, OnInit } from '@angular/core';
import { AboutService } from "../../../services/about.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-modify-about',
  templateUrl: './modify-about.component.html',
  styleUrls: ['./modify-about.component.css']
})
export class ModifyAboutComponent implements OnInit {

  public dataForm: FormGroup = this.builder.group({
    title: ["", Validators.required],
    description: ["", Validators.required]
  })

  public about: any;

  constructor(
    private aboutService: AboutService,
    private builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(){
    this.route.params.subscribe(
      params => {
        if(params.id){
          this.aboutService.getAbout(params.id).subscribe(
            about => {
              this.about = about;
              this.dataForm.get("title")?.setValue(this.about.title);
              this.dataForm.get("description")?.setValue(this.about.description)
            },
            err => console.log(err)
          )
        }
      }
    )
  }

  updateAbout(){
    if(this.dataForm.status == "VALID"){
      this.aboutService.modifyAbout(this.about._id, {...this.dataForm.value}).subscribe(
        result => this.router.navigate(["/admin/abouts"]),
        err => console.log(err)
      )
    } else {
      const span: HTMLElement|null = document.querySelector(".msgError");
      if(span) span.style.display = "block";
    }
  }

}
