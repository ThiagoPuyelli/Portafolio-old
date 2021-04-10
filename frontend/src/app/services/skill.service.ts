import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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

}
