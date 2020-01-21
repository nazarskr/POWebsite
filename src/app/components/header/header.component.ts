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
  isChecked = false;
  constructor(private languageService: LanguageService,
              private router: Router) { }

  ngOnInit() {
  }
  goHome() {
    this.router.navigate(['home']);
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
    console.log(this.language);
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
