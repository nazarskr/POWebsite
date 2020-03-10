import { Component, OnInit } from '@angular/core';
import { Login, Change } from '../../shared/classes';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-admin-changelp',
  templateUrl: './admin-changelp.component.html',
  styleUrls: ['./admin-changelp.component.scss']
})
export class AdminChangelpComponent implements OnInit {
  enter: Login;
  passChange: Change = new Change();
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getLogin();
  }
  getLogin() {
    this.loginService.getLogin().subscribe(data => {
      this.enter = data;
    });
  }
  changePass() {
    if (!this.passChange.oldPass && !this.passChange.newPass && !this.passChange.confirmPass) {
      return;
    } else if (this.passChange.oldPass !== this.enter.pass && this.passChange.oldPass) {
      alert('Старий пароль вказаний невірно!');
    } else {
      if (!this.passChange.newPass && !this.passChange.confirmPass) {
        return;
      } else if (this.passChange.newPass !== this.passChange.confirmPass) {
        alert('Новий пароль і його підтвердження не співпадають');
      } else {
        this.enter.pass = this.passChange.newPass;
        this.loginService.updateLogin(this.enter);
        alert('Пароль успішно змінено!');
        this.passChange.oldPass = '';
        this.passChange.newPass = '';
        this.passChange.confirmPass = '';
      }
    }
  }

}
