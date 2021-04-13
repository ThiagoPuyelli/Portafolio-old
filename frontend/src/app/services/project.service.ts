import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects(){
    return this.http.get(environment.uri + "/project");
  }

  saveProject(body: any){
      const token: null|string = sessionStorage.getItem("x-access-token");
      if(token){
        let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
        return this.http.post(environment.uri + "/project", body, {headers});
      } else {
        return this.http.post(environment.uri + "/project", body);
      }
  }

}
