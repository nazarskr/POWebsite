import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'POWebsite';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }
  getOutHello() {
    const block = document.getElementById('sayHello');
    const title = document.getElementById('sayHelloTitle');
    const centralLogo = document.getElementById('centralLogo');
    block.classList.add('getOutHello');
    title.classList.add('getOutHelloTitle');
    centralLogo.classList.add('centralLogo');
    setTimeout(() => {
      block.setAttribute('style', 'display: none');
    }, 3900);
  }
}
