import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../shared/classes';
import { GalleryService } from '../../shared/services/gallery.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit {
  fileAccept = '.jpg, .JPEG, .JPG, .png, .tiff, .svg';
  filePath = 'newsImages/';
  oldImageUrl: string;
  submitted = true;
  update = false;
  gallery: Gallery[];
  galleryImage: Gallery = new Gallery();
  constructor(private afStorage: AngularFireStorage,
              private galleryService: GalleryService) { }

  ngOnInit() {
  }

  // getUrl(data) {
  //   this.oldImageUrl = this.galleryImage.url;
  //   this.galleryImage.url = data;
  //   this.galleryService
  //     .updateNews(this.galleryImage.key, {url: this.galleryImage.url})
  //     .catch(err => console.log(err));
  //   if (this.oldImageUrl) {
  //     this.afStorage.storage.refFromURL(this.oldImageUrl).delete();
  //   }
  //   alert('Завантажено!');
  // }

}
