import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './Login';
import { LoginService } from './login.service';
import { Register } from '../register/register';
@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login = new Login();
    users: Login[] = [];
    registers: Register[]=[];
    showPassword!: boolean;
    valid = true;    
    @ViewChild('uname') usernameElement!: ElementRef; 
    loginForm!: FormGroup;
    constructor(private router: Router, private formBuilder: FormBuilder,
        private loginService: LoginService, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.loginService.getUsers().subscribe({next:users => this.users = users});
        
        this.loginForm = this.formBuilder.group({
            userName: [this.login.userName, Validators.required],
            password: [this.login.password, Validators.required]
        })
    }
    showpass(){
        if(this.showPassword===true){
            (document.getElementById('eye') as HTMLImageElement).src="../../assets/imgs/eye-slash-solid.svg";
        }
        else{
            (document.getElementById('eye') as HTMLImageElement).src="../../assets/imgs/eye-regular.svg";
        }
        this.showPassword= !this.showPassword;
    
    }
    onSubmit() {
        
         //fetches the form object containing the values of all the form controls
        this.login = this.loginForm.getRawValue();      
        const user = this.users.filter(currUser => currUser.userName === this.login.userName && currUser.password === this.login.password)[0];
        
        if (user) {
            const email= user['email'];
            this.loginService.username = this.login.userName;   
            sessionStorage.setItem('username',this.loginService.username);
            sessionStorage.setItem('email',email);
            this.router.navigate(['/products']);
        } else {
            this.valid = false;
        }
    }
}
