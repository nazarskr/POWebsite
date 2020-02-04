import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {LanguageService} from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: string;

  constructor(private router: Router,
              private languageService: LanguageService) {
                this.getLanguage();
              }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(lang => {
      this.language = lang;
    });
  }
}
