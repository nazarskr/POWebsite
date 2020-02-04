import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  language: string;
  backgroundTop = '0px';
  events = [
    {
      title: 'Концерт в Оргзалі',
      date: new Date(),
      facebookUrl: 'https://www.facebook.com/',
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
      title: 'Чудовий Концерт в Музеї Пінзеля',
      date: new Date(),
      imageUrl: '../../../assets/test/img8.JPG',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
    }
  ];
  constructor(private languageService: LanguageService,
              private scrollDispatcher: ScrollDispatcher) {
    this.getLanguage();
  }

  ngOnInit() {
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }
  scrollingEvents() {
    this.scrollDispatcher.scrolled().subscribe(() => {
        this.backgroundTop = `${window.scrollY * 2}px`;
        console.log(this.backgroundTop);
    });
  }

}
