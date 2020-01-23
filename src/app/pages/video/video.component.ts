import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  language = 'ukr';
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
  ];
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.getLanguage();
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }

}
