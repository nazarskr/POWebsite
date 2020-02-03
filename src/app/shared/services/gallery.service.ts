import { Injectable } from '@angular/core';
import { Gallery } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private dbPath = '/gallery';
  galleryRef: AngularFirestoreCollection<Gallery> = null;

  constructor(private firestore: AngularFirestore) {
    this.galleryRef = firestore
      .collection(this.dbPath);
  }

  getGallery(): AngularFirestoreCollection<Gallery> {
    return this.galleryRef;
  }
  createGallery(image: Gallery): void {
    this.galleryRef.add({...image});
  }
  deleteGallery(key: string): Promise<void> {
    return this.galleryRef.doc(key).delete();
  }
}
