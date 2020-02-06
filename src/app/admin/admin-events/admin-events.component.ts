import { Component, OnInit } from '@angular/core';
import { Events } from '../../shared/classes';
import { EventsService } from '../../shared/services/events.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {
  editMode = false;
  showForm = false;
  fileAccept = '.jpg, .JPEG, .JPG, .png, .tiff, .svg';
  filePath = 'eventsImages/';
  dropId = 'eventsImages';
  events: Events[] = [];
  event = new Events();
  oldImageUrls: string[] = [];

  constructor(private eventsService: EventsService,
              private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    this.eventsService.getEvents().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          ({...c.payload.doc.data(), key: c.payload.doc.id})
        )
      )
    ).subscribe(data => {
      this.events = data;
    });
  }
  addEvent() {
    this.editMode = false;
    this.showForm = true;
  }
  createEvent() {
    if (
        this.event.titleUkr &&
        this.event.titleEng &&
        this.event.date &&
        this.event.time &&
        this.event.descriptionUkr &&
        this.event.descriptionEng &&
        this.event.imageUrl) {
          this.event.key = '';
          if (this.event.facebookUrl) {
            this.event.facebookUrl = '';
          }
          this.eventsService.createEvent(this.event);
          this.event = new Events();
          alert('Додано');
          this.showForm = false;
    }
  }
  editEvent(event) {
    this.showForm = true;
    this.editMode = true;
    this.event = {...event};
    this.event.date = event.date.toDate();
    this.cleanStorage();
  }
  updateEvent() {
    if (
      this.event.titleUkr &&
      this.event.titleEng &&
      this.event.date &&
      this.event.descriptionUkr &&
      this.event.descriptionEng &&
      this.event.imageUrl) {
        this.eventsService
          .updateEvent(this.event.key, this.event)
          .catch(err => console.log(err));
        this.showForm = false;
        this.editMode = false;
        this.event = new Events();
        alert('Оновлено!');
    }
    this.cleanStorage();
  }
  deleteEvent(event) {
    const sure = confirm('Впевнений?');
    if (sure) {
      this.eventsService.deleteEvent(event.key);
      this.afStorage.storage.refFromURL(event.imageUrl).delete();
    }
  }
  getUrl(data) {
    if (data.id === 'eventsImages') {
      this.oldImageUrls.push(this.event.imageUrl);
      this.event.imageUrl = data.url;
      alert('Завантажено!');
    }
  }
  cleanStorage() {
    if (this.oldImageUrls.length > 0) {
      this.oldImageUrls.forEach(el => {
        this.afStorage.storage.refFromURL(el).delete();
      });
    }
  }
  cancelAction() {
    this.showForm = false;
    this.editMode = false;
    this.event = new Events();
  }
}
