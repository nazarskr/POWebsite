import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { Contact } from 'src/app/shared/classes';
import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  language: string;
  contact = new Contact();

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
    alert('Message sent!');
    this.router.navigate(['home']);
  }
}
