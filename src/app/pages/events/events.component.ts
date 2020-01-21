import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  language = 'ukr';
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
