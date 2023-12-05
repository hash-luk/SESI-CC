import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('passwordField') passwordField: IonInput;
  showPassword:boolean = false;

  constructor() {}

  ngOnInit() {}

  redirectTo(page: string): void {
    window.location.href = `${page}`;
  }

  public changePassView() {
    this.showPassword = !this.showPassword;
    this.passwordField.type = this.showPassword ? 'text' : 'password';
  }
}
