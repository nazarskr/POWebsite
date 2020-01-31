import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { EventsService } from '../../shared/services/events.service';
import {Events} from '../../shared/classes';
import {map} from 'rxjs/operators';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  language: string;
  testEvents: Events[];
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
      facebookUrl: 'https://www.facebook.com/',
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
      facebookUrl: 'https://www.facebook.com/',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde assumenda nam praesentium laborum cum, dolor nesciunt quas deserunt, aspernatur id? Quasi iure veniam soluta optio explicabo ea beatae error!'
    }
  ];
  blocks: HTMLCollection | NodeList;
  constructor(private languageService: LanguageService,
              private eventsService: EventsService,
              private scrollDispatcher: ScrollDispatcher) {
                this.getLanguage();
              }

  ngOnInit() {
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
      this.getEvents();
    });
  }
  getEvents() {
    this.eventsService.getEvents(this.language)
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data()})
          )
        )
      )
      .subscribe(data => {
        this.testEvents = data;
      });
  }
  scrollingEvents() {
    this.scrollDispatcher.scrolled().subscribe(() => {
      this.appearElement();
    });
  }
  appearElement() {
    this.blocks = document.getElementsByClassName('eventOne');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.blocks.length; i++) {
      const pos = this.blocks[i].getBoundingClientRect();
      if (pos.top < window.innerHeight + 100 && pos.top > window.innerHeight) {
        this.blocks[i].classList.add('appear');
      }
    }
  }

}
