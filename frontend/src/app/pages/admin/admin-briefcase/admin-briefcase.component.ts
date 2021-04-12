import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../../services/project.service";

@Component({
  selector: 'app-admin-briefcase',
  templateUrl: './admin-briefcase.component.html',
  styleUrls: ['./admin-briefcase.component.css']
})
export class AdminBriefcaseComponent implements OnInit {

  public projects: Array<any> = [];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects().subscribe(
        (result: any) => this.projects = result,
        err => console.log(err)
    )
  }

}
