import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ScrollDispatcher} from '@angular/cdk/scrolling';
import { Events } from '../../shared/classes';
import { EventsService } from '../../shared/services/events.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  language: string;
  backgroundTop = '0px';
  events: Events[];
  constructor(private languageService: LanguageService,
              private scrollDispatcher: ScrollDispatcher,
              private eventsService: EventsService) {
    this.getLanguage();
    this.getEvents();
  }

  ngOnInit() {
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
    if (window.innerWidth < 1000) {
      return;
    } else {
      const elem = document.getElementById('homeImage');
      this.scrollDispatcher.scrolled().subscribe(() => {
        if (window.scrollY === 0) {
          elem.setAttribute('style', 'top: 0');
        }
        this.backgroundTop = `${(window.scrollY) / 7}px`;
      });
    }
  }
}
