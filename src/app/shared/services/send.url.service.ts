import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendUrlService {
  embedVideo: Subject<string> = new Subject();
  openedVideo: BehaviorSubject<boolean> = new BehaviorSubject(false);
  opened = false;
  url: string;

  constructor() { }
  sendVideoUrl(url) {
    this.embedVideo.next(url);
    this.url = url;
  }
  getVideoUrl() {
    return this.embedVideo;
  }
  showVideo() {
    if (this.opened) {
      this.opened = false;
    } else {
      this.opened = true;
    }
    this.openedVideo.next(this.opened);
  }
}
