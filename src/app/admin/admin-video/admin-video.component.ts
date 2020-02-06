import { Component, OnInit } from '@angular/core';
import { Video } from '../../shared/classes';
import { VideoService } from '../../shared/services/video.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-video',
  templateUrl: './admin-video.component.html',
  styleUrls: ['./admin-video.component.scss']
})
export class AdminVideoComponent implements OnInit {
  editMode = false;
  showForm = false;
  fileAccept = '.jpg, .JPEG, .JPG, .png, .tiff, .svg';
  filePath = 'videoImages/';
  dropId = 'videoImages';
  videos: Video[] = [];
  video = new Video();
  oldImageUrls: string[] = [];

  constructor(private videoService: VideoService,
              private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.getVideo();
  }
  getVideo() {
    this.videoService.getVideo().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({...c.payload.doc.data(), key: c.payload.doc.id})
        )
      )
    ).subscribe(data => {
      this.videos = data;
    });
  }
  addVideo() {
    this.editMode = false;
    this.showForm = true;
  }
  createVideo() {
    if (
        this.video.titleUkr &&
        this.video.titleEng &&
        this.video.date &&
        this.video.imageUrl &&
        this.video.url) {
          this.video.key = '';
          this.videoService.createVideo(this.video);
          this.video = new Video();
          alert('Додано');
          this.showForm = false;
    }
  }
  editVideo(video) {
    this.showForm = true;
    this.editMode = true;
    this.video = {...video};
    this.video.date = video.date.toDate();
    this.cleanStorage();
  }
  updateVideo() {
    if (
        this.video.titleUkr &&
        this.video.titleEng &&
        this.video.date &&
        this.video.imageUrl &&
        this.video.url) {
        this.videoService
          .updateVideo(this.video.key, this.video)
          .catch(err => console.log(err));
        this.showForm = false;
        this.editMode = false;
        this.video = new Video();
        alert('Оновлено!');
    }
    this.cleanStorage();
  }
  deleteVideo(video) {
    const sure = confirm('Впевнений?');
    if (sure) {
      this.videoService.deleteVideo(video.key);
      this.afStorage.storage.refFromURL(video.imageUrl).delete();
    }
  }
  getUrl(data) {
    if (data.id === 'videoImages') {
      this.oldImageUrls.push(this.video.imageUrl);
      this.video.imageUrl = data.url;
      alert('Завантажено!');
    }
  }
  cleanStorage() {
    if (this.oldImageUrls.length > 0) {
      this.oldImageUrls.forEach(el => {
        this.afStorage.storage.refFromURL(el).delete();
      });
    }
  }
  cancelAction() {
    this.showForm = false;
    this.editMode = false;
    this.video = new Video();
  }
}
