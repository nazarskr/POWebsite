import { Component, OnInit } from '@angular/core';
import { Video } from '../../shared/classes';
import { GalleryService } from '../../shared/services/gallery.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-video',
  templateUrl: './admin-video.component.html',
  styleUrls: ['./admin-video.component.scss']
})
export class AdminVideoComponent implements OnInit {
  fileAccept = '.jpg, .JPEG, .JPG, .png, .tiff, .svg';
  filePath = '/videoImages';
  oldImageUrl: string;
  submitted = true;
  update = false;
  constructor() { }

  ngOnInit() {
  }

}
