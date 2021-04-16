import { Component, OnInit } from '@angular/core';
import { AboutService } from "../../../services/about.service";

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent implements OnInit {
  
  public abouts: Array<any> = [];

  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this.findAbouts();
    setTimeout(() => console.log(this.abouts), 300)
  }

  findAbouts(){
    this.aboutService.getAbouts().subscribe(
      (abouts: any) => this.abouts = abouts,
      err => console.log(err)
    )
  }

  deleteAbout(id: string){
    this.aboutService.deleteAbout(id).subscribe(
      result => location.reload(),
      err => console.log(err)
    )
  }

}
