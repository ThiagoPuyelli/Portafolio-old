import { Component, OnInit } from '@angular/core';
import { AboutService } from "../../services/about.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public abouts: Array<any> = [];
  public principalAbout: any;

  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(){
    this.aboutService.getAbouts().subscribe(
      (result: any) => {
        for(let i of result){
          if(i.title == "Sobre mi"){
            this.principalAbout = i;
          } else {
            this.abouts.push(i);
          }
        }
      },
      err => console.log(err)
    )
  }

}
