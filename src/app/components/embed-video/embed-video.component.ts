import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  trigger,
  state,
  style
} from '@angular/animations';
import { EmbedVideoService } from 'ngx-embed-video';
import { SendUrlService } from '../../shared/services/send.url.service';

@Component({
  selector: 'app-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.scss'],
  animations: [
    trigger('showVideo', [
      state('open', style({
        display: 'flex',
        opacity: 1
      })),
      state('close', style({
        display: 'none',
        opacity: 0
      })),
    ]),
  ],
})
export class EmbedVideoComponent implements OnInit {
  videoUrl: string;
  showVideo: boolean;
  embedded: any;
  opened: boolean;
  constructor(private embedService: EmbedVideoService,
              private sendUrlService: SendUrlService) {
                this.getUrl();
                this.getShowVideo();
              }

  ngOnInit() {
  }
  getUrl() {
    this.sendUrlService.getVideoUrl()
      .subscribe(data => {
        this.videoUrl = data;
        this.embedVideo();
    });
  }
  getShowVideo() {
    this.sendUrlService.openedVideo.subscribe(data => {
      this.opened = data;
    });
  }
  embedVideo() {
    if (this.videoUrl) {
      this.embedded = this.embedService.embed(this.videoUrl, {
        attr: { width: window.innerWidth * 0.8, height: window.innerWidth * 0.45}
      }).changingThisBreaksApplicationSecurity;
      const container = document.getElementById('embed');
      container.innerHTML += this.embedded;
    }
  }
  closeVideo() {
    const container = document.getElementById('embed');
    this.sendUrlService.showVideo();
    if (this.embedded) {
      container.innerHTML = '';
    }
  }
}
