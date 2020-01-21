import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  language: string;
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.getLanguage();
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
    console.log(this.language);
  }
  changeLanguage() {
    this.languageService.changeLanguage();
    console.log(this.language);
  }

}
