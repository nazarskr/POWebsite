import { Injectable } from '@angular/core';
import { Events } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private dbPath = '/events';
  eventsRef: AngularFirestoreCollection<Events> = null;

  constructor(private firestore: AngularFirestore) {
    this.eventsRef = firestore
      .collection(this.dbPath, ref => ref.orderBy('date', 'desc'));
  }

  getEvents(): AngularFirestoreCollection<Events> {
    return this.eventsRef;
  }
  createEvent(event: Events): void {
    this.eventsRef.add({...event});
  }
  updateEvent(key: string, val: any): Promise<void> {
    return this.eventsRef.doc(key).update(val);
  }
  deleteEvent(key: string): Promise<void> {
    return this.eventsRef.doc(key).delete();
  }
}
