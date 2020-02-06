import { Component, OnInit } from '@angular/core';
import { About } from '../../shared/classes';
import { AboutService } from '../../shared/services/about.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent implements OnInit {
  about: About = new About();
  fileAccept = '.jpg, .JPEG, .JPG, .png, .tiff, .svg';
  filePath = 'aboutImages/';
  dropOrchId = 'imgOrch';
  dropCondId = 'imgCond';
  oldImageUrls: string[] = [];
  constructor(private aboutService: AboutService,
              private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.getAbout();
  }
  getAbout() {
    this.aboutService.getAbout().subscribe(data => {
      this.about = data;
    });
  }
  updateAbout() {
    this.aboutService.updateAbout(this.about)
    .then(() => {
      alert('Оновлено!');
    });
    if (this.oldImageUrls.length > 0) {
      this.oldImageUrls.forEach(el => {
        if (el) {
          this.afStorage.storage.refFromURL(el).delete();
        }
      });
    }
  }
  getOrchUrl(data) {
    if (data.id === 'imgOrch') {
      this.oldImageUrls.push(this.about.orchImageUrl);
      this.about.orchImageUrl = data.url;
      console.log(this.about.orchImageUrl);
      console.log(this.oldImageUrls);
    }
  }
  getCondUrl(data) {
    if (data.id === 'imgCond') {
      this.oldImageUrls.push(this.about.condImageUrl);
      this.about.condImageUrl = data.url;
      console.log(this.about.condImageUrl);
      console.log(this.oldImageUrls);
    }
  }

}
