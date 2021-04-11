import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
 
@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanLoad {

  private auth: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ){  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token: null|string = sessionStorage.getItem("x-access-token");
      if(token) {
        this.router.navigate(["/admin"]);
        return false;
      };
      return true;
    }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token: null|string = sessionStorage.getItem("x-access-token");
      if(token) {
        this.router.navigate(["/admin"])
        return false
      };
      return true;
  }
}
