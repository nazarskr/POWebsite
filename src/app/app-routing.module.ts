import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VideoComponent } from './pages/video/video.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'video', component: VideoComponent},
  {path: 'events', component: EventsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
