import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from '../models/Upload';

@Injectable()
export class UploadService {
  imageurl: string;
  constructor(private fdb: AngularFireDatabase) { }

  uploadImage(img: Upload){
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`images/${img.file.name}`).put(img.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>{
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        img.progress= (snap.bytesTransferred / snap.totalBytes) * 100;
      },
      (error) =>{
        console.log("Error while uploading: " + error);
      },
      () => {
        img.url = uploadTask.snapshot.downloadURL;
      });
    return img;
  }

}
