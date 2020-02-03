import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  language: string;
  blocks: HTMLCollection;
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
