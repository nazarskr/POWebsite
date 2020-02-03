import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';
import { Gallery } from '../../shared/classes';
import { GalleryService } from '../../shared/services/gallery.service';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild (NgxImageGalleryComponent, {static: false}) ngxImageGallery: NgxImageGalleryComponent;
  language: string;
  conf: GALLERY_CONF = {
    imageOffset: '10px',
    imageBorderRadius: '0',
    showDeleteControl: false,
    showImageTitle: true,
    reactToKeyboard: true,
    closeOnEsc: true,
    backdropColor: 'black',
    showThumbnails: false,
  };
  images: Gallery[];
  imagesDelta = [];
  galleryImages: HTMLCollection;

  constructor(private languageService: LanguageService,
              private galleryService: GalleryService,
              private scrollDispatcher: ScrollDispatcher) {
                this.getLanguage();
              }

  ngOnInit() {
    this.getGallery();
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
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
        this.images = data;
        if (this.images.length > 0) {
          this.initImages();
          setTimeout(() => {
            this.setImagesClass();
          }, 0);
        }
      });
  }
  scrollingEvents() {
    this.scrollDispatcher.scrolled().subscribe(() => {
      this.appearElement();
    });
  }
  appearElement() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.galleryImages.length; i++) {
      const pos = this.galleryImages[i].getBoundingClientRect();
      if (pos.top < window.innerHeight + 100 && pos.top > window.innerHeight / 1.2) {
        this.galleryImages[i].classList.add('appear');
      }
    }
  }
  initImages() {
    this.imagesDelta.length = Math.ceil(this.images.length / 8);
    this.galleryImages = document.getElementsByClassName('galleryImage');
  }
  setImagesClass() {
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.images.length; i++) {
      if (!this.galleryImages[i]) {
        return;
      }
      this.galleryImages[i].classList.add(`img${j}`);
      j++;
      if (j % 8 === 0) {
          j = 0;
      }
    }
  }
  // open gallery
  openGallery(index: number) {
    this.ngxImageGallery.open(index);
  }
  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }
  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }
  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }
  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
  }
  // callback on gallery closed
  galleryClosed() {
  }
  // callback on gallery image clicked
  galleryImageClicked(index) {
  }
  // callback on gallery image changed
  galleryImageChanged(index) {
  }
  // callback on user clicked delete button
  deleteImage(index) {
  }

}
