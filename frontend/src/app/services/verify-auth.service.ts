import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VerifyAuthService {

  public auth: boolean = false;

  constructor(
    private http: HttpClient
  ) {
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      this.http.get(environment.uri + "/verify-auth", {headers}).subscribe(
        (result: any) => {
          if(result.auth) this.auth = true;
        },
        err => console.log(err)
      );
    }
   }

}
