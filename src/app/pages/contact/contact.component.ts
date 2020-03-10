import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { Contact } from 'src/app/shared/classes';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/shared/services/contact.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('showThanks', [
      state('show', style({
        transform: 'translate(0)',
        opacity: 1
      })),
      state('hide', style({
        transform: 'translate(0, -100vh)',
        opacity: 0
      })),
      transition('show => hide', animate('.3s')),
      transition('hide => show', animate('.6s')),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  language: string;
  contact = new Contact();
  sent = false;
  constructor(private languageService: LanguageService,
              private contactService: ContactService,
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
  sendMessage(form) {
    if (form.invalid) {
      return;
    }
    this.contact.name = form.value.contactName;
    if (form.value.contactEmail) {
      this.contact.email = form.value.contactEmail;
    }
    this.contact.message = form.value.contactMessage;
    this.contact.date = new Date();
    this.contactService.createContact(this.contact);
    this.contact = new Contact();
    form.resetForm();
    this.sent = true;
  }
  hideThanks() {
    this.sent = false;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
