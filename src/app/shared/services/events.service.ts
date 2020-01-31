import { Injectable } from '@angular/core';
import { Events } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private dbPath: string;

  constructor(private firestore: AngularFirestore) {
    this.dbPath = 'db/events';
  }

  getEvents(lang): AngularFirestoreCollection<Events> {
    return this.firestore.collection(`/${lang}/${this.dbPath}`);
  }
  createEvent(lang: string, event: Events): void {
    this.firestore.collection(`/${lang}/${this.dbPath}`)
      .add({...event});
  }
  updateEvent(lang: string, key: string, val: any): Promise<void> {
    return this.firestore.collection(`/${lang}/${this.dbPath}`)
      .doc(key)
      .update(val);
  }
  deleteEvent(lang: string, key: string): Promise<void> {
    return this.firestore.collection(`/${lang}/${this.dbPath}`)
      .doc(key)
      .delete();
  }
}
