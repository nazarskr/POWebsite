import { Injectable } from '@angular/core';
import { Contact } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private dbPath = '/ukr/db/contact';
  contactRef: AngularFirestoreCollection<Contact> = null;

  constructor(private firestore: AngularFirestore) {
    this.contactRef = firestore.collection(this.dbPath);
  }

  getContacts(): AngularFirestoreCollection<Contact> {
    return this.contactRef;
  }
  createContact(contact: Contact): void {
    this.contactRef.add({...contact});
  }
  deleteContact(key: string): Promise<void> {
    return this.contactRef.doc(key).delete();
  }
}
