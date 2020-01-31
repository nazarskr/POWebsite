import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule} from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from './loader-config';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

// material
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VideoComponent } from './pages/video/video.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminEventsComponent } from './admin/admin-events/admin-events.component';
import { EmbedVideoComponent } from './components/embed-video/embed-video.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminVideoComponent } from './admin/admin-video/admin-video.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    EventsComponent,
    ContactComponent,
    VideoComponent,
    AdminComponent,
    AdminAboutComponent,
    AdminEventsComponent,
    EmbedVideoComponent,
    AdminGalleryComponent,
    AdminContactComponent,
    AdminVideoComponent,
    UploadImageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxImageGalleryModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    MatInputModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgxDropzoneModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
