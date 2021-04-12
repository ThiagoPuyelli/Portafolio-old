import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  saveContact(body: any){
    return this.http.post(environment.uri + "/contact", body);
  }

  getContacts(){
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.get(environment.uri + "/contact", {headers});
    } else {
      return this.http.get(environment.uri + "/contact");
    }
  }

  deleteContact(id: string){
    const token: null|string = sessionStorage.getItem("x-access-token");
    if(token){
      let headers: HttpHeaders = new HttpHeaders().set("x-access-token", token);
      return this.http.delete(environment.uri + "/contact/" + id, {headers});
    } else {
      return this.http.delete(environment.uri + "/contact/" + id);
    }
  }

}
