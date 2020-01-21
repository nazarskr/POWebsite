import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
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
