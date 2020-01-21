import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private language: string;
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.getLanguage();
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
      console.log(this.language);
    });
  }

}
