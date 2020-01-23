import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Output() sendReq = new EventEmitter();
  language = 'ukr';
  videoUrl: string;
  opened = false;
  videos = [
    {
      title: 'Концерт в Оргзалі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт в Філармонії',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт в Опері',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт на Вокзалі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт в Дрогобичі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт в Оргзалі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт в Філармонії',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт в Опері',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт на Вокзалі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
    {
      title: 'Концерт в Дрогобичі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    },
  ];
  blocks: HTMLCollection | NodeList;
  constructor(private languageService: LanguageService,
              private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
    this.getLanguage();
    this.appearElement();
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }
  showVideo(video) {
    this.videoUrl = video.url;
    this.opened = true;
    this.sendReq.emit(true);
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
      if (pos.top < window.innerHeight + 100 && pos.top > window.innerHeight / 1.2) {
        this.blocks[i].classList.add('appear');
      }
    }
  }
}
