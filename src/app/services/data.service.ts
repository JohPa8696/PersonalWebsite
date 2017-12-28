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
    // this.projects = this.afs.collection('projects').valueChanges();
    this.loadData();
   }

  loadData(){
    this.projects = this.afs.collection('projects').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Project;
        data.id = a.payload.doc.id;
        return data;
      })
    });
  }

  getProjects(){
    this.loadData();
    return this.projects;
  }

}
