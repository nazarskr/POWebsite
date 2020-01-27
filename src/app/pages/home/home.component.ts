import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  language: string;
  photos = [
    {title: 'Роман Багрій, концерт', url: '../../../assets/test/img1.JPG'},
  ];
  videos = [
    {
      title: 'Концерт в Оргзалі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      url: 'https://www.youtube.com/watch?v=ObaeucxuJ8U'
    }
  ];
  events = [
    {
      title: 'Концерт в Оргзалі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
    },
    {
      title: 'Концерт в Філармонії',
      date: new Date(),
      imageUrl: '../../../assets/test/img9.JPG',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
    },
    {
      title: 'Концерт в Музеї Пінзеля',
      date: new Date(),
      imageUrl: '../../../assets/test/img8.JPG',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
    }
  ];
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.getLanguage();
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
    console.log(this.language);
  }
  changeLanguage() {
    this.languageService.changeLanguage();
    console.log(this.language);
  }

}
