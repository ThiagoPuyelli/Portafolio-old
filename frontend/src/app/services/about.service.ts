import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(
    private http: HttpClient
  ) { }

  getAbouts(){
      return this.http.get(environment.uri + "/about");
  }

}
