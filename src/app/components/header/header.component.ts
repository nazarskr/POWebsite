import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language: string;
  showHeader = 'none';
  isChecked = false;
  constructor(private languageService: LanguageService,
              private router: Router) {
                this.getLanguage();
                this.dispatchRouter();
              }

  ngOnInit() {
  }
  dispatchRouter() {
    this.router.events.subscribe(() => {
    if (this.router.url === '/home' || this.router.url === '/') {
      this.showHeader = 'none';
    } else {
      this.showHeader = 'block';
    }
    });
  }
  goHome() {
    this.router.navigate(['home']);
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }
  changeLanguage() {
    this.languageService.changeLanguage();
  }
  removeActive(): void {
    if (document.getElementsByClassName('navActive')[0]) {
      const prev = document.getElementsByClassName('navActive')[0];
      prev.classList.remove('navActive');
    }
  }
  setActive(event: MouseEvent): void {
    this.removeActive();
    const el = event.target as HTMLElement;
    el.classList.add('navActive');
    this.closeMenu();
  }
  closeMenu(): void {
    this.isChecked = false;
  }

}
