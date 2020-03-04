import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { EventsService } from '../../shared/services/events.service';
import { Events } from '../../shared/classes';
import {map} from 'rxjs/operators';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  language: string;
  events: Events[] = [];
  blocks: HTMLCollection | NodeList;
  constructor(private languageService: LanguageService,
              private eventsService: EventsService,
              private scrollDispatcher: ScrollDispatcher) {
                this.getLanguage();
              }

  ngOnInit() {
    this.getEvents();
    console.log(window.innerWidth);
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }
  getEvents() {
    this.eventsService.getEvents()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data()})
          )
        )
      )
      .subscribe(data => {
        this.events = data;
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
