import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BriefcaseComponent } from './pages/briefcase/briefcase.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { ContactsComponent } from './pages/admin/contacts/contacts.component';
import { AboutsComponent } from './pages/admin/abouts/abouts.component';
import { AdminBriefcaseComponent } from './pages/admin/admin-briefcase/admin-briefcase.component';
import { AdminSkillComponent } from './pages/admin/admin-skill/admin-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BriefcaseComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    HomeAdminComponent,
    ContactsComponent,
    AboutsComponent,
    AdminBriefcaseComponent,
    AdminSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
