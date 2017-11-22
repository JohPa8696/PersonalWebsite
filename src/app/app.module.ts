import { BrowserModule } from '@angular/platform-browser';
import { AlertModule} from 'ngx-bootstrap'; // Bootstrap
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SociallinksComponent } from './component/sociallinks/sociallinks.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';

const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'about', component: AboutmeComponent },
  {path: 'resume', component: ResumeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AdminloginComponent}
]

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
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
