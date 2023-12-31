import { Injectable,isDevMode } from '@angular/core';
import { Orders } from './order';
import { Observable,throwError } from 'rxjs';
import { catchError, map,tap } from 'rxjs/operators';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyordersService {
  backendURL :String = '';
  orders=[];
  constructor(private http:HttpClient) { 
    if(isDevMode()){
      this.backendURL='http://localhost:5000';
    }
    else{
      this.backendURL='';
    }
  }
  getOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.backendURL+'/api/getOrders').pipe(
      tap(orders=>console.log(orders))
      // map(orders => orders.filter(order => order.userId === sessionStorage.getItem("username")),console.log(orders)),
      
    );
  }
private handleError(err: HttpErrorResponse) {
  console.error(err);
  return throwError(()=>err.error() || 'Server error');
}
}
