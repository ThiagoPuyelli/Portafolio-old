import { Component } from '@angular/core';
import { VerifyAuthService } from "./services/verify-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  public auth: boolean = false;

  constructor(
    private verify: VerifyAuthService
  ){
    if(verify.auth){
      this.auth = true;
    }
  }



}
