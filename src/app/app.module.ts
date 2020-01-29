import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule} from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from './loader-config';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

//material
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxImageGalleryModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
