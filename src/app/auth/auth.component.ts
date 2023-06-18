import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  signUp: boolean = false;

  changeToSignup(){
    this.signUp = true;
  }

  changeToLogin(){
    this.signUp = false;
  }
}
