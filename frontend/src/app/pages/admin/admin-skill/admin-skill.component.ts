import { Component, OnInit } from '@angular/core';
import { SkillService } from "../../../services/skill.service";

@Component({
  selector: 'app-admin-skill',
  templateUrl: './admin-skill.component.html',
  styleUrls: ['./admin-skill.component.css']
})
export class AdminSkillComponent implements OnInit {

  public skills: Array<any> = [];

  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(){
    this.skillService.getSkills().subscribe(
      (skills: any) => this.skills = skills,
      err => console.log(err)
    )
  }

  deleteSkill(id: string){
    this.skillService.deleteSkill(id).subscribe(
      result => location.reload(),
      err => console.log(err)
    )
  }

}
