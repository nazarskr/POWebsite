import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/classes';
import { GalleryService } from '../../shared/services/gallery.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit {
  fileAccept = '.jpg, .JPEG, .JPG, .png, .tiff, .svg';
  filePath = 'galleryImages/';
  fileUrls: string[] = [];
  submitted = true;
  update = false;
  gallery: Gallery[];
  constructor(private afStorage: AngularFireStorage,
              private galleryService: GalleryService) { }

  ngOnInit() {
    this.getGallery();
  }
  getGallery() {
    this.galleryService.getGallery()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c =>
            ({...c.payload.doc.data(), key: c.payload.doc.id})
          )
        )
      )
      .subscribe(data => {
        this.gallery = data;
      });
  }
  deleteImage(item) {
    const sure = confirm('впевнений?');
    if (sure) {
      this.galleryService.deleteGallery(item.key);
      this.afStorage.storage.refFromURL(item.url).delete();
    }
  }
  getUrl(data) {
    this.fileUrls.push(data);
    this.galleryService.createGallery(data);
    alert(`${data.name} завантажено!`);
  }

}
