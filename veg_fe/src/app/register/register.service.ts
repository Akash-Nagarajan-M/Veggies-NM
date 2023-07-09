import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Register } from './register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  backendURL !:string;
  constructor(private http:HttpClient) {
    if(isDevMode()){
      this.backendURL='http://localhost:5000';
  }
  else{
      this.backendURL='';
  }
   }
  
  getRegisters(): Observable<Register[]> {
    return this.http.get<Register[]>(this.backendURL+'/api/getRegisters').pipe(catchError(this.handleError)  );
  }
  addUsers(regist:any):Observable<any>{
      const options=new HttpHeaders({'content-type':'application/json'});
      return this.http.post(this.backendURL+'/api/addRegisters',regist,{headers:options}).pipe();
    }
 

private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(()=>err.error() || 'Server error');
}
}
