import { Injectable } from '@angular/core';
import { About } from '../classes';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private dbPath = '/about';
  aboutDoc: AngularFirestoreDocument<About> = null;

  constructor(private firestore: AngularFirestore) {
    this.aboutDoc = firestore
      .collection(this.dbPath)
      .doc('pVJljQZ0x3PV0Io9NHZV');
  }

  getAbout(): Observable<About> {
    return this.aboutDoc.valueChanges();
  }
  updateAbout(val: About): Promise<void> {
    return this.aboutDoc.update(val);
  }
}
