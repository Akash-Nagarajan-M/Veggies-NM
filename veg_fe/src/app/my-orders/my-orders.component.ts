import { Component, OnInit } from '@angular/core';
import { MyordersService } from './myorders.service';
import { Router } from '@angular/router';
import { Orders } from './order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private router:Router, private orderService:MyordersService) { }
  orders : Orders[] = [];
  orders1 : Orders[]= [];
  errormessage :string = '';
  flag=false;
  ngOnInit(): void {
    if(sessionStorage.getItem("username")){
      // console.log(sessionStorage.getItem("username"));
      this.orderService.getOrders().subscribe(
        {next:(orders)=>{
          this.orders = orders;
          this.fetchOrders();
        },
        error:error=>this.errormessage =error
      });
      // console.log(this.orders);
      // this.fetchOrders();
      
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  fetchOrders(){
    this.flag=true;
    
    const name= sessionStorage.getItem("username");
    
    this.orders1= this.orders.filter(cur => cur.userId === name);
    
    
  }
}
