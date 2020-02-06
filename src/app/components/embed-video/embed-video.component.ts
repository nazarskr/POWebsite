import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  trigger,
  state,
  style
} from '@angular/animations';
import { EmbedVideoService } from 'ngx-embed-video';

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
  @Input() opened: boolean;
  @Input() videoUrl: string;
  @Output() send = new EventEmitter();
  showVideo: boolean;
  container: HTMLElement = document.getElementById('embed-video');
  embedded: any;
  constructor(private embedService: EmbedVideoService) { }

  ngOnInit() {
  }
  embedVideo() {
    if (this.videoUrl) {
      this.embedded = this.embedService.embed(this.videoUrl, {
        attr: { width: window.innerWidth * 0.8, height: window.innerWidth * 0.45}
      }).changingThisBreaksApplicationSecurity;
      this.container.innerHTML += this.embedded;
    }
  }
  closeVideo() {
    if (this.embedded) {
      this.container.removeChild(this.embedded);
    }
    this.opened = false;
    this.send.emit(this.opened);
  }
}
