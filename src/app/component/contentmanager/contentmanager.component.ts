import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/Project';
import { UploadService } from '../../services/upload.service';
import { Upload } from '../../models/Upload';
import {Observable} from 'rxjs/Rx';
import * as _ from "lodash";
@Component({
  selector: 'app-contentmanager',
  templateUrl: './contentmanager.component.html',
  styleUrls: ['./contentmanager.component.css']
})
export class ContentmanagerComponent implements OnInit {
  isProject = true;

  title: string;
  type: string;
  languages: string;
  technologies: string;
  frameworks: string;
  images: string[]=[];
  videos: string[]=[];
  isML: boolean;
  description: string;

  currentUpload: Upload;
  dropzoneActive:boolean = false;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  dropzoneState ($event: boolean) {
    this.dropzoneActive =$event;
  }

  handleDrop(fileList: FileList){
    let filesIndex = _.range(fileList.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload =new Upload(fileList[idx]);
      this.uploadService.uploadImage(this.currentUpload);
      setTimeout(()=>{
        this.images.push(this.currentUpload.url);
        // console.log(this.images);
      }, 5000);
    });
  }
}
