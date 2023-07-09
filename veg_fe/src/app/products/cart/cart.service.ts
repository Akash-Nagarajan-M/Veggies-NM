import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { isDevMode } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  backendURL !:string;
  constructor(private http:HttpClient) {
    if(isDevMode()){
      this.backendURL='http://localhost:5000';
  }
  else{
      this.backendURL='';
  }
   }
  addOrders(orders:any):Observable<any>{
      const options=new HttpHeaders({'content-type':'application/json'});
      return this.http.post(this.backendURL+'/api/addOrders',orders,{headers:options}).pipe();
  }
 
}
