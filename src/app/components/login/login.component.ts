import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../../shared/classes';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

let enter = false;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  entrance: Login;
  adL: string;
  adP: string;
  constructor(private loginService: LoginService,
              public router: Router) {
              this.getEntrance();
              }

  ngOnInit() {
  }
  private getEntrance(): void {
    this.loginService
      .getLogin()
      .subscribe(data => {
        this.entrance = data;
      });
  }
  login() {
    if (this.adL === this.entrance.login
        && this.adP === this.entrance.pass) {
          enter = true;
          this.adL = '';
          this.adP = '';
          this.router.navigate(['admin']);
    } else {
          enter = false;
          this.adL = '';
          this.adP = '';
          alert('ти не адмін, ти - мудак!');
          this.router.navigate(['далеко']);
    }
  }
}
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  if (!enter) {
    this.router.navigate(['login']);
  }
  return enter;
}
}
