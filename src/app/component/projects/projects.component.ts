import { Component, OnInit } from '@angular/core';
import { DataService } from  '../../services/data.service';
import { Project } from '../../models/Project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  filteredProjects: Project[];
  // projectTypes: IHash={};
  typeDict = new Map<string, Project[]>();
  languageDict =  new Map<string, Project[]>();
  frameworkDict =  new Map<string, Project[]>();
  technologyDict =  new Map<string, Project[]>();

  systemStyle = {
    'background-color':'#4286f4',
    'color':'white'
  }
  webAppStyle = {
    'background-color':'#41f4e2',
    'color':'white'
  }
  toolStyle ={
    'background-color':'#c5ccc7',
    'color':'white'
  }

  mobileAppStyle = {
    'background-color':'#b740b3',
    'color':'white'
  }

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProjects().subscribe(projects =>{
      this.projects = projects;
      this.filteredProjects = this.projects;

      // Loop through the project and create maps for filtering
      _.each(_.range(this.projects.length), (i) => {
        // Project types
        if (this.typeDict.get(this.projects[i].type) == undefined){
            this.typeDict.set(this.projects[i].type,[this.projects[i]]);
        } else {
            let prjs = this.typeDict.get(this.projects[i].type);
            prjs.push(this.projects[i]);
            this.typeDict.set(this.projects[i].type,prjs);
        }

        // Languages
        _.each(_.range(this.projects[i].languages.length),(j) =>{
          if (this.languageDict.get(this.projects[i].languages[j]) == undefined){
            this.languageDict.set(this.projects[i].languages[j],[this.projects[i]]);
          } else {
            let prjs = this.languageDict.get(this.projects[i].languages[j]);
            prjs.push(this.projects[i]);
            this.languageDict.set(this.projects[i].languages[j],prjs);
          }
        });

        // frameworks
        if(this.projects[i].frameworks != undefined){
          _.each(_.range(this.projects[i].frameworks.length),(j) =>{
            if (this.frameworkDict.get(this.projects[i].frameworks[j]) == undefined){
              this.frameworkDict.set(this.projects[i].frameworks[j],[this.projects[i]]);
            } else {
              let prjs = this.frameworkDict.get(this.projects[i].frameworks[j]);
              prjs.push(this.projects[i]);
              this.frameworkDict.set(this.projects[i].frameworks[j],prjs);
            }
          });
        }
        console.log(this.frameworkDict);
        if(this.projects[i].technologies != undefined){
          _.each(_.range(this.projects[i].technologies.length),(j) =>{
            if (this.technologyDict.get(this.projects[i].technologies[j]) == undefined){
              this.technologyDict.set(this.projects[i].technologies[j],[this.projects[i]]);
            } else {
              let prjs = this.technologyDict.get(this.projects[i].technologies[j]);
              prjs.push(this.projects[i]);
              this.technologyDict.set(this.projects[i].technologies[j],prjs);
            }
          });
        }
        console.log(this.technologyDict);
        // Frameworks

        // _.each(_.range(this.projects[i].frameworks.length),(j) =>{
        //   if (this.frameworkDict.get(this.projects[i].languages[j]) == undefined){
        //     this.frameworkDict.set(this.projects[i].languages[j],[this.projects[i]]);
        //   } else {
        //     let prjs = this.frameworkDict.get(this.projects[i].languages[j]);
        //     prjs.push(this.projects[i]);
        //     this.frameworkDict.set(this.projects[i].languages[j],prjs);
        //   }
        // });
      });
    });
  }

  getHeaderColor(type:String){
    if (type == 'System'){
      return this.systemStyle;
    } else if (type == 'WebApp') {
      return this.webAppStyle;
    } else if (type == 'Tool') {
      return this.toolStyle;
    } else {
      return this.mobileAppStyle;
    }
  }
}
