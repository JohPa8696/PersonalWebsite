import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from 'angularfire2/firestore';
import { Project } from '../models/Project'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  // List of projects
  projectCollection: AngularFirestoreCollection<Project>;
  projects: Observable<Project[]>;

  constructor( public afs: AngularFirestore) {
    this.projects = this.afs.collection('projects').valueChanges();
   }

  getProjects(){
    return this.projects;
  }

}
