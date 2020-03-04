import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Gallery } from '../../shared/classes';

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.component.html',
  styleUrls: ['./upload-gallery.component.scss']
})
export class UploadGalleryComponent implements OnInit {
  @Input() fileAccept: string;
  @Input() filePath: string;
  @Input() id: string;
  @Output() fileUrl: EventEmitter<Gallery> = new EventEmitter();
  files: File[] = [];
  uploadFiles: any[] = [];
  ref: any;
  newFileUrl: any;
  uploadProgress$: Observable<number>;
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event) {
    this.uploadFiles.splice(this.uploadFiles.indexOf(event), 1);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onReset() {
    this.uploadFiles.splice(0, this.uploadFiles.length);
    this.files.splice(0, this.files.length);
  }
  upload() {
    this.files.forEach(file => {
      this.uploadFiles.push({
        name: file.name,
        item: file
      });
    });
    console.log(this.uploadFiles);
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
          }).catch((error) => {
            console.log(error);
          });
        });
      });
      this.onReset();
    }
  }
}
