import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  signUp: boolean = false;
  isLoading = false;
  error: string = null;
  isLoginMode = false;

  constructor(private router: Router, private authService: AuthService){
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    console.log(form.value)

    const email = form.value.email;
    const password = form.value.password;

    let authObs = Observable<AuthResponseData>;

    this.isLoading = true;
    console.log(this.signUp);
    if(this.signUp){
      this.authService.signup(email,password).subscribe(
        resData =>{
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/home']);
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }else{
      this.authService.login(email,password).subscribe(
        resData =>{
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/home']);
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }

  onHandleError(){
    this.error = null;
  }

  changeToSignup(){
    this.signUp = true;
  }

  changeToLogin(){
    this.signUp = false;
  }
}
