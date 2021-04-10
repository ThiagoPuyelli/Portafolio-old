import { Component, OnInit } from '@angular/core';
import { SkillService } from "../../services/skill.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.findSkils()
  }

  findSkils(){
    this.skillService.getSkills().subscribe(
      result => console.log(result),
      err => console.log(err)
    )
  }

}
