import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Register } from './register';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationform !:FormGroup;
  register = new Register();
  users: Register[] = [];
  valid=true;
  submitted = false;
  success=false;
  constructor(private router:Router, private form:FormBuilder,private registerservice:RegisterService,
    private renderer:Renderer2) {
     
   }

  ngOnInit(): void{
    this.registerservice.getRegisters().subscribe({next:users => this.users = users});
    this.registrationform = this.form.group({
      userName: [ this.register.userName, Validators.required],
      password: [ this.register.password, Validators.required],
      name: [ this.register.name, Validators.required],
      email: [ this.register.email,
        Validators.required],
      address: [ this.register.address, Validators.required]
    }) 
  }
  onSubmit(){
     this.register = this.registrationform.getRawValue();
     const user = this.users.filter(currUser =>currUser.userName === this.register.userName)[0];
     const mail = this.users.filter(currUser => currUser.email=== this.register.email)[0];
     if(user){
       alert("User Name already taken");
       this.router.navigate(['/register']);
     }
     else if(mail){
        alert("Already there is another user name with this email");
        this.router.navigate(['/register']);
     }
     else{
       this.registerservice.addUsers({
        name:this.registrationform.controls['name'].value,
        email:this.registrationform.controls['email'].value,
        userName:this.registrationform.controls['userName'].value,
        password:this.registrationform.controls['password'].value,
        address:this.registrationform.controls['address'].value
      }).subscribe({
        next:()=>this.submitted=true
      });
      this.success=true;
      setTimeout(() => {
        this.router.navigate(['/login']);  
      }, 3000);
       
     }
     

     
      
      
    
  }
}
