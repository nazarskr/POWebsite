import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Gallery } from '../../shared/classes';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  @Input() fileAccept: string;
  @Input() filePath: string;
  @Output() fileUrl: EventEmitter<Gallery> = new EventEmitter();
  files: File[] = [];
  uploadFile: any;
  uploadFiles: any[] = [];
  fileName: string;
  ref: any;
  newFileUrl: any;
  uploadProgress$: Observable<number>;
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  onSelect(event) {
    this.files.push(...event.addedFiles);
    this.files.forEach(file => {
      this.fileName = file.name;
      this.uploadFile = file;
      this.uploadFiles.push({
        name: file.name,
        item: file
      });
    });
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  onReset() {
    this.files.splice(0, this.files.length);
  }
  upload() {
    if (this.uploadFiles.length > 0) {
      this.uploadFiles.forEach(file => {
        const task = this.afStorage.upload(`${this.filePath}${file.name}`, file.item);
        this.uploadProgress$ = task.percentageChanges();
        task.then(() => {
          const storage = firebase.storage();
          const pathReference = storage.ref(`${this.filePath}${file.name}`);
          pathReference.getDownloadURL().then(url => {
            this.fileUrl.emit({
              url,
              key: '',
              name: file.name});
            document.getElementById('progressBar').style.display = 'none';
          }).catch((error) => {
            console.log(error);
          });
        });
      });
      this.onReset();
    }
  }

}
