import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParam();
  }

  getParam(){
    this.route.url.subscribe(
      result => console.log(result),
      err => console.log(err)
    )
  }

  logout() {
    sessionStorage.removeItem("x-access-token");
    location.reload();
  }
}
