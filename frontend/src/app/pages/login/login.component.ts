import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; 
import { AdminService } from "../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User
  public dataForm: FormGroup = this.builder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });

  constructor(
    private builder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
    this.user = new User();
   }

  ngOnInit(): void {
  }

  sendLogin(){
    if(this.dataForm.status == "VALID"){
      this.user = this.dataForm.value;
      console.log(this.user)
      this.adminService.login(this.user).subscribe(
        async (result: any) => {
          if(result.auth) {
            sessionStorage.setItem("x-access-token", result.token);
            await this.router.navigate(["/admin"]);
            await location.reload();
          } else {
            const span: HTMLElement|null = document.querySelector("#msgError");
            if(span) span.style.display = "block";
          }
        },
        err => console.log(err)
      )
    } else {
      const span: HTMLElement|null = document.querySelector("#msgError");
      if(span) span.style.display = "block";
    }
  }

}
