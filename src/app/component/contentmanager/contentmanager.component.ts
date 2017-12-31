import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { UploadService } from '../../services/upload.service';
import { Upload } from '../../models/Upload';
import { Observable } from 'rxjs/Rx';
import { DataService } from '../../services/data.service';

import * as _ from "lodash";
@Component({
  selector: 'app-contentmanager',
  templateUrl: './contentmanager.component.html',
  styleUrls: ['./contentmanager.component.css']
})
export class ContentmanagerComponent implements OnInit {
  isProject = true;

  // Project fields
  title: string="";
  type: string="";
  languages: string="";
  technologies: string="";
  frameworks: string="";
  // images: string[]=[]; // Depreciated
  videos: string="";
  isML: boolean=false;
  description: string="";
  currentUpload: Upload;
  dropzoneActive:boolean = false;
  project: Project;

  // Experience fields

  constructor(private uploadService: UploadService,
              private dataService: DataService) { }

  ngOnInit() {
  }

  dropzoneState ($event: boolean) {
    this.dropzoneActive =$event;
  }

  handleDrop(fileList: FileList){
    let filesIndex = _.range(fileList.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(fileList[idx]);
      this.uploadService.uploadImage(this.currentUpload);
    });
  }

  onProjectSubmit(){
    if(this.title != '' && this.type != '' && this.languages !='' && this.technologies !='' && this.frameworks != ''
      && this.description != ''){
        var imageUrls = this.uploadService.getImageUrls();
        this.project = {
          title: this.title,
          type: this.type,
          languages: this.languages.split(','),
          technologies: this.technologies.split(','),
          framework: this.frameworks.split(','),
          images: imageUrls,
          videos: this.videos,
          isML: this.isML,
          description: this.description
        };
        console.log(this.project.images);
        this.dataService.addProject(this.project);
        this.title = "";
        this.type="";
        this.languages="";
        this.technologies="";
        this.frameworks="";
        // this.images=[];
        this.isML=false;
        this.videos="";
        this.description="";
        this.uploadService.clearImageUrls();
      }
  }


}
