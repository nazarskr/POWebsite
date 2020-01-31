import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../shared/classes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {
  contact: Contact[];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContact();
  }
  getContact() {
    this.contactService.getContacts()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data()})
          )
        )
      )
      .subscribe(data => {
        this.contact = data;
      });
  }
  deleteContact(item) {
    const sure = confirm('впевнений?');
    if (sure) {
      this.contactService
        .deleteContact(item.key)
        .catch(err => console.log(err));
    }
  }

}
