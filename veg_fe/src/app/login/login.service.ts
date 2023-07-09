import { ElementRef, Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Login } from './Login';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    username = '';
    loginElement!: ElementRef;
    welcomeElement!: ElementRef;
    backendURL !:string;
    constructor(private http: HttpClient) {
        if(isDevMode()){
            this.backendURL='http://localhost:5000';
        }
        else{
            this.backendURL='';
        }
    }

    // Makes a get request to the backend to fetch users data
    getUsers(): Observable<Login[]> {
        return this.http.get<Login[]>(this.backendURL+'/api/getUsers').pipe(catchError(this.handleError)  );
    }

    // Invoked if an error is thrown in the get request
    private handleError(err: HttpErrorResponse) {
        console.error(err);
        return throwError(()=>err.error() || 'Server error');
    }
}
