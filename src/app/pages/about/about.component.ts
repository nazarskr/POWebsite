import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { AboutService } from '../../shared/services/about.service';
import { About } from '../../shared/classes';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  language: string;
  blocks: HTMLCollection;
  about: About = new About();
  constructor(private languageService: LanguageService,
              private scrollDispatcher: ScrollDispatcher,
              private aboutService: AboutService) {
    this.getLanguage();
    this.getAbout();
  }

  ngOnInit() {
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }
  getAbout() {
    this.aboutService.getAbout().subscribe(data => {
      this.about = data;
    });
  }
  scrollingEvents() {
    this.scrollDispatcher.scrolled().subscribe(() => {
      this.appearElement();
    });
  }
  appearElement() {
    this.blocks = document.getElementsByClassName('aboutSection');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.blocks.length; i++) {
      const pos = this.blocks[i].getBoundingClientRect();
      if (pos.top < window.innerHeight + 100 && pos.top > window.innerHeight / 1.2) {
        this.blocks[i].classList.add('appear');
      }
    }
  }

}
