import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: string;
  private lang: BehaviorSubject<string>;
  constructor() {
    this.setLanguage();
  }
  setLanguage() {
    if (!this.language) {
      this.language = 'ukr';
    }
    this.lang = new BehaviorSubject<string>(this.language);
  }
  getLanguage(): Observable<string> {
    return this.lang;
  }
  changeLanguage() {
    if (this.language === 'ukr') {
      this.language = 'eng';
    } else if (this.language === 'eng') {
      this.language = 'ukr';
    }
    this.lang.next(this.language);
  }
}
