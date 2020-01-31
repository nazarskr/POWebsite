import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';
import { Gallery } from '../../shared/classes';
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
  images: Gallery[] = [
    {key: '', title: 'Роман Багрій, 1-ше зображення', url: '../../../assets/test/img1.JPG'},
    {key: '', title: 'Роман Багрій, 2-ге зображення', url: '../../../assets/test/img2.JPG'},
    {key: '', title: 'Роман Багрій, 3-тє зображення', url: '../../../assets/test/img3.JPG'},
    {key: '', title: 'Роман Багрій, 4-те зображення', url: '../../../assets/test/img4.JPG'},
    {key: '', title: 'Роман Багрій, 5-те зображення', url: '../../../assets/test/img5.jpg'},
    {key: '', title: 'image6', url: '../../../assets/test/img6.JPG'},
    {key: '', title: 'image7', url: '../../../assets/test/img7.JPG'},
    {key: '', title: 'image8', url: '../../../assets/test/img8.JPG'},
    {key: '', title: 'image9', url: '../../../assets/test/img2.JPG'},
    {key: '', title: 'image10', url: '../../../assets/test/img3.JPG'},
    {key: '', title: 'image11', url: '../../../assets/test/img4.JPG'},
    {key: '', title: 'image12', url: '../../../assets/test/img5.jpg'},
    {key: '', title: 'image13', url: '../../../assets/test/img6.JPG'},
    {key: '', title: 'image14', url: '../../../assets/test/img7.JPG'},
    {key: '', title: 'image15', url: '../../../assets/test/img8.JPG'},
    {key: '', title: 'image16', url: '../../../assets/test/img1.JPG'},
    {key: '', title: 'image17', url: '../../../assets/test/img3.JPG'},
    {key: '', title: 'image18', url: '../../../assets/test/img4.JPG'},
    {key: '', title: 'image19', url: '../../../assets/test/img5.jpg'},
    {key: '', title: 'image20', url: '../../../assets/test/img6.JPG'},
    {key: '', title: 'image21', url: '../../../assets/test/img4.JPG'},
    {key: '', title: 'image22', url: '../../../assets/test/img7.JPG'},
  ];
  imagesDelta = [];
  galleryImages: HTMLCollection;
  constructor(private languageService: LanguageService,
              private scrollDispatcher: ScrollDispatcher) {
                this.getLanguage();
              }

  ngOnInit() {
    this.initImages();
    setTimeout(() => {
      this.setImagesClass();
    }, 0);
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }
  initImages() {
    this.imagesDelta.length = Math.round(this.images.length / 8);
    this.galleryImages = document.getElementsByClassName('galleryImage');
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
  setImagesClass() {
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.images.length; i++) {
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
