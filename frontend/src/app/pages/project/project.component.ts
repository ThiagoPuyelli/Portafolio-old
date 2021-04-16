import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project: any;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(){
    this.route.params.subscribe(
      params => {
        if(params.id){
          this.projectService.getProject(params.id).subscribe(
            project => this.project = project,
            err => console.log(err)
          )
        }
      },
      err => console.log(err)
    )
  }

}
