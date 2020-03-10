import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Video } from '../../shared/classes';
import { VideoService } from '../../shared/services/video.service';
import { map } from 'rxjs/operators';
import { SendUrlService } from '../../shared/services/send.url.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  language: string;
  videoUrl: string;
  opened = false;
  videos: Video[] = [];
  blocks: HTMLCollection | NodeList;
  constructor(private languageService: LanguageService,
              private scrollDispatcher: ScrollDispatcher,
              private videoService: VideoService,
              private sendUrlService: SendUrlService) {
                this.getLanguage();
                this.getShowVideo();
              }

  ngOnInit() {
    this.getVideos();
    this.appearElement();
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }
  getVideos() {
    this.videoService.getVideo()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data()})
          )
        )
      )
      .subscribe(data => {
        this.videos = data;
      });
  }
  getShowVideo() {
    this.sendUrlService.openedVideo.subscribe(data => {
      this.opened = data;
    });
  }
  showVideo(video) {
    this.videoUrl = video.url;
    this.opened = true;
    this.sendUrlService.sendVideoUrl(video.url);
    this.sendUrlService.showVideo();
  }
  hideVideo(data) {
    this.opened = data;
  }
  scrollingEvents() {
    this.scrollDispatcher.scrolled().subscribe(() => {
      this.appearElement();
    });
  }
  appearElement() {
    this.blocks = document.getElementsByClassName('videoOne');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.blocks.length; i++) {
      const pos = this.blocks[i].getBoundingClientRect();
      if (pos.top < window.innerHeight + 100 && pos.top > window.innerHeight) {
        this.blocks[i].classList.add('appear');
      }
    }
  }
}
