import {environment} from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule} from 'ngx-bootstrap'; // Bootstrap
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SociallinksComponent } from './component/sociallinks/sociallinks.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { WorkComponent } from './component/work/work.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// Service Imports
import { DataService } from './services/data.service';
import { UploadService } from './services/upload.service';
import { ContentmanagerComponent } from './component/contentmanager/contentmanager.component';
import { FiledropDirective } from './component/contentmanager/filedrop.directive';
const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'about', component: AboutmeComponent },
  {path: 'resume', component: ResumeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AdminloginComponent},
  {path: 'work', component: WorkComponent},
  {path: 'contentmanager', component: ContentmanagerComponent}
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
    WorkComponent,
    ContentmanagerComponent,
    FiledropDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [DataService,
              UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
