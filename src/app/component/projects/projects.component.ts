import { Component, OnInit } from '@angular/core';
import { DataService } from  '../../services/data.service';
import { Project } from '../../models/Project'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
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
      // console.log(projects);/
      this.projects = projects;
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
