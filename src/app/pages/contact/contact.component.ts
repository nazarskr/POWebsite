import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  language: string;
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  messageFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(private languageService: LanguageService) {
    this.getLanguage();
  }

  ngOnInit() {
  }
  getLanguage() {
    this.languageService.getLanguage().subscribe(data => {
      this.language = data;
    });
  }

}
