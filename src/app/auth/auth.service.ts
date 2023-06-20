import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, tap, throwError } from "rxjs";


export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn:'root'})
export class AuthService{

    constructor(private http: HttpClient, private router: Router) {

    }

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfcZSjlOj8ni1uDMrTegCK1evMTb1KZ_s',
        {
            email: email,
            password: password,
            returnSecureToken: true
        });//.pipe(catchError(this.handleError), tap(resData => {
          //  this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
       // }));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfcZSjlOj8ni1uDMrTegCK1evMTb1KZ_s',
        {
            email: email,
            password: password,
            returnSecureToken: true
        });
    }

    logout(){

    }

    autoLogout(){

    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){

    }

    autoLogin(){

    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An uknown error occured!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already!';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist!';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct!';
                break;
        }
        return throwError(errorMessage);
    }
}