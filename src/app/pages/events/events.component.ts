import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  language = 'ukr';
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
    },
    {
      title: 'Концерт в Дрогобичі',
      date: new Date(),
      imageUrl: '../../../assets/test/img1.JPG',
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
  }

}
