import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { SignupComponent } from './signup/signup.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    IndexpageComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
