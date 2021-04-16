import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  getAbout(id: string){
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.get(environment.uri + "/about/" + id, {headers});
    } else {
      return this.http.get(environment.uri + "/about/" + id);
    }
  }

  saveAbout(body: any){
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.post(environment.uri + "/about", body, {headers});
    } else {
      return this.http.post(environment.uri + "/about", body);
    }
  }

  modifyAbout(id: string, body: any){ 
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.put(environment.uri + "/about/" + id, body, {headers});
    } else {
      return this.http.put(environment.uri + "/about/" + id, body);
    }
  }

  deleteAbout(id: string){
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.delete(environment.uri + "/about/" + id, {headers});
    } else {
      return this.http.delete(environment.uri + "/about/" + id);
    }
  }

}
