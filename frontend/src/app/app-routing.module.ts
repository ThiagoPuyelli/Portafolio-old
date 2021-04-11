import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { AboutsComponent } from './pages/admin/abouts/abouts.component';
import { AdminBriefcaseComponent } from './pages/admin/admin-briefcase/admin-briefcase.component';
import { AdminSkillComponent } from './pages/admin/admin-skill/admin-skill.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactsComponent } from './pages/admin/contacts/contacts.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { BriefcaseComponent } from './pages/briefcase/briefcase.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent, canLoad: [NoAuthGuard], canActivate: [NoAuthGuard]},
  { path: "about", component: AboutComponent, canLoad: [NoAuthGuard], canActivate: [NoAuthGuard] },
  { path: "contact", component: ContactComponent, canLoad: [NoAuthGuard], canActivate: [NoAuthGuard]},
  { path: "briefcase", component: BriefcaseComponent, canLoad: [NoAuthGuard], canActivate: [NoAuthGuard]},
  { path: "login", component: LoginComponent, canLoad: [NoAuthGuard], canActivate: [NoAuthGuard]},
  { path: "admin", component: AdminComponent, canLoad: [AuthGuard], canActivate: [AuthGuard],
    children: [
      { path: "", component: HomeAdminComponent, canLoad: [AuthGuard], canActivate: [AuthGuard]},
      { path: "abouts", component: AboutsComponent, canLoad: [AuthGuard], canActivate: [AuthGuard]},
      { path: "briefcase", component: AdminBriefcaseComponent, canLoad: [AuthGuard], canActivate: [AuthGuard]},
      { path: "skill", component: AdminSkillComponent, canLoad: [AuthGuard], canActivate: [AuthGuard]},
      { path: "contacts", component: ContactsComponent, canLoad: [AuthGuard], canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
