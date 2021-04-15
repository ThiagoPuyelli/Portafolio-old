import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private http: HttpClient
  ) { }

  getSkills(){
    return this.http.get(environment.uri + "/skill");
  }

  updateSkill(id: string, body: any){
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.put(environment.uri + "/skill/" + id, body, {headers});
    } else {
      return this.http.put(environment.uri + "/skill/" + id, body);
    }
  }

  getSkill(id: string){
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.get(environment.uri + "/skill/" + id, {headers});
    } else {
      return this.http.get(environment.uri + "/skill/" + id);
    }
  }

  saveSkill(body: FormData){
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.post(environment.uri + "/skill", body, {headers});
    } else {
      return this.http.post(environment.uri + "/skill", body);
    }
  }

}
