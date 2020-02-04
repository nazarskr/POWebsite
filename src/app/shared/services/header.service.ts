import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private location: Location) { }
  headerVisibility() {
    this.location.subscribe( val => {
      console.log(val);
    });
  }
}
