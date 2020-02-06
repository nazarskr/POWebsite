import { Injectable } from '@angular/core';
import { Video } from '../classes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private dbPath = '/video';
  videoRef: AngularFirestoreCollection<Video> = null;

  constructor(private firestore: AngularFirestore) {
    this.videoRef = firestore
      .collection(this.dbPath, ref => ref.orderBy('date', 'desc'));
  }

  getVideo(): AngularFirestoreCollection<Video> {
    return this.videoRef;
  }
  createVideo(video: Video): void {
    this.videoRef.add({...video});
  }
  updateVideo(key: string, val: any): Promise<void> {
    return this.videoRef.doc(key).update(val);
  }
  deleteVideo(key: string): Promise<void> {
    return this.videoRef.doc(key).delete();
  }
}
