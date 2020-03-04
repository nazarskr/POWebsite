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
    this.opened = !this.opened;
    this.openedVideo.next(this.opened);
  }
}
