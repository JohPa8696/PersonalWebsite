import { Component, OnInit } from '@angular/core';
import { DataService } from  '../../services/data.service';
import { Project } from '../../models/Project';
import { Observable } from 'rxjs/Rx';

import * as _ from "lodash";
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

  typeList: string[];
  languageList: string[];
  frameworkList: string[];
  technologyList: string[];

  filters= ['','','',''];

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
      });
      this.typeList = Array.from(this.typeDict.keys());
      this.languageList = Array.from(this.languageDict.keys());
      this.frameworkList = Array.from(this.frameworkDict.keys());
      this.technologyList = Array.from(this.technologyDict.keys());
      console.log(this.typeList);
    });
    // Observable.interval(2000).subscribe(x => {
    //   console.log(this.typeDict);
    // });
  }

  filter(key: string, ftr:string){
    console.log(key);
    if(key == 'type'){
      if(this.filters[0] == ftr){
        this.filters[0] = '';
        this.filteredProjects = this.project;
      } else{
        this.filters[0] = ftr;
        this.filteredProjects = this.typeDict.get(ftr);
      }
    } else if (key == 'language'){
      if(this.filters[1] == ftr){
        this.filters[1] = '';
        this.filteredProjects = this.project;
      } else{
        this.filters[1] = ftr;
        this.filteredProjects = this.languageDict.get(ftr);
      }
    } else if (key == 'framework'){
      if(this.filters[2] == ftr){
        this.filters[2] = '';
        this.filteredProjects = this.project;
      } else{
        this.filters[2] = ftr;
        this.filteredProjects = this.frameworkDict.get(ftr);
      }
    } else {
      if(this.filters[3] == ftr){
        this.filters[3] = '';
        this.filteredProjects = this.project;
      } else{
        this.filters[3] = ftr;
        this.filteredProjects = this.technologyDict.get(ftr);
      }
    }

    // let prjs = [];
    // if(this.filters[0] == '' ){
    //   prjs = this.projects;
    // }else{
    //   prjs = this.typeDict.get(this.filters[0]);
    // }
    //
    // if (this.filters[1] != ''){
    //   let temp = this.languageDict.get(this.filters[1]);
    //   for(let i =0; i < temp.length; i++){
    //     if(!prjs.includes(temp[i])){
    //       prjs.push(temp[i]);
    //     }
    //   }
    // }
    //
    // if (this.filters[2] != ''){
    //   let temp = this.frameworkDict.get(this.filters[2]);
    //   for(let i =0; i < temp.length; i++){
    //     if(!prjs.includes(temp[i])){
    //       prjs.push(temp[i]);
    //     }
    //   }
    // }
    // if (this.filters[3] != ''){
    //   let temp = this.technologyDict.get(this.filters[3]);
    //   for(let i =0; i < temp.length; i++){
    //     if(!prjs.includes(temp[i])){
    //       prjs.push(temp[i]);
    //     }
    //   }
    // }
    //
    // this.filteredProjects = prjs;
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
