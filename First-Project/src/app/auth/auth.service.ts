import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email:string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient) {}


    signUp(email: string, password: string) {
      return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBb7V2ZpbEFRoLCSpxk5iV36Y8Q0U2VpBc',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        ).pipe(catchError(this.handleError));
    }

    login(email:string, password:string) {
        return this.http.post<AuthResponseData> ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBb7V2ZpbEFRoLCSpxk5iV36Y8Q0U2VpBc',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
      ).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'An email exists already!' 
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.' 
                break;
            case 'INVALID_PASSWORD': 
                errorMessage = 'This password is not correct'
                break;    
        }

        return throwError(errorMessage);
    }
}
