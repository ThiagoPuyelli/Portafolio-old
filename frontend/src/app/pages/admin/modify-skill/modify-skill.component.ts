import { Component, OnInit } from '@angular/core';
import { SkillService } from "../../../services/skill.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modify-skill',
  templateUrl: './modify-skill.component.html',
  styleUrls: ['./modify-skill.component.css']
})
export class ModifySkillComponent implements OnInit {

  public skill: any;

  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  findSkill(){
    this.route.params.subscribe(
      params => {
        if(params.id){
          this.skillService.getSkill(params.id).subscribe(
            skill => this.skill = skill,
            err => console.log(err)
          )
        }
      }
    )
  }

}
