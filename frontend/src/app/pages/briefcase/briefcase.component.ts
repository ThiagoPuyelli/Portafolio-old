import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.css']
})
export class BriefcaseComponent implements OnInit {

  public projects: Array<any> = [];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.findProjects();
  }

  findProjects(){
    this.projectService.getProjects().subscribe(
      (projects: any) => this.projects = projects,
      err => console.log(err)
    )
  }

}
