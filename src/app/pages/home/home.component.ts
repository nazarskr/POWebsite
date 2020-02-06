import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ScrollDispatcher, FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';

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
      titleUkr: 'Концерт в Оргзалі',
      titleEng: 'Concert в Оргзалі',
      date: new Date(),
      imageUrl: '../../../assets/test/img6.JPG',
      // tslint:disable-next-line:max-line-length
      descriptionUkr: 'Лорем ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!',
      // tslint:disable-next-line:max-line-length
      descriptionEng: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
    },
    {
      titleUkr: 'Концерт в Філармонії',
      titleEng: 'Concert в Філармонії',
      date: new Date(),
      imageUrl: '../../../assets/test/img9.JPG',
      facebookUrl: 'https://www.facebook.com/',
      // tslint:disable-next-line:max-line-length
      descriptionUkr: 'Лорем ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!',
      // tslint:disable-next-line:max-line-length
      descriptionEng: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
    },
    {
      titleUkr: 'Концерт в Музеї Пінзеля',
      titleEng: 'Concert в Музеї Пінзеля',
      date: new Date(),
      imageUrl: '../../../assets/test/img8.JPG',
      // tslint:disable-next-line:max-line-length
      descriptionUkr: 'Лорем ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!',
      // tslint:disable-next-line:max-line-length
      descriptionEng: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
    },
    {
      titleUkr: 'Концерт в Дрогобичі',
      titleEng: 'Concert в Дрогобичі',
      date: new Date(),
      imageUrl: '../../../assets/test/img1.JPG',
      facebookUrl: 'https://www.facebook.com/',
      // tslint:disable-next-line:max-line-length
      descriptionUkr: 'Лорем ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!',
      // tslint:disable-next-line:max-line-length
      descriptionEng: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
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
    const elem = document.getElementById('homeImage');
    this.scrollDispatcher.scrolled().subscribe(() => {
      if (window.scrollY === 0) {
        elem.setAttribute('style', 'top: 0');
      }
      this.backgroundTop = `${(window.scrollY) / 7}px`;
    });
  }
}
