import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { RegisterComponent } from './register/register.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
    declarations: [AppComponent, WelcomeComponent, LoginComponent,FaqComponent, RegisterComponent, MyOrdersComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
