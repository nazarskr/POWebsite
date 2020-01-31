import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  language: string;
  date = new Date();
  constructor(private languageService: LanguageService,
              private router: Router) {
    this.getLanguage();
  }

  ngOnInit() {
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }
  goHome() {
    this.router.navigate(['home']);
  }
}
