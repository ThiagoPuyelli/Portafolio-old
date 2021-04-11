import { Component, AfterViewChecked } from '@angular/core';
import { VerifyAuthService } from "./services/verify-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'frontend';

  public auth: boolean = false;
  public verifyAuth: boolean = false;

  constructor(
    private verify: VerifyAuthService
  ){
  }
  
  ngAfterViewChecked(): void {
    if(this.verify.auth){
      this.auth = true;
      this.verifyAuth = true
    } else {
      this.verifyAuth = true
    }
    console.log(this.auth)
  }



}
