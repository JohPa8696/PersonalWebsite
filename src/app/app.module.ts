import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SociallinksComponent } from './component/sociallinks/sociallinks.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SociallinksComponent,
    AdminloginComponent,
    ProjectsComponent,
    AboutmeComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
