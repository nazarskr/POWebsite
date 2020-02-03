import { Injectable } from '@angular/core';
import { Contact } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private dbPath = '/contact';
  contactRef: AngularFirestoreCollection<Contact> = null;

  constructor(private firestore: AngularFirestore) {
    this.contactRef = firestore.collection(this.dbPath, ref => ref.orderBy('date', 'desc'));
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
