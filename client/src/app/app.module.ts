import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';

import { BackgroundimageComponent } from './backgroundimage/backgroundimage.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './employee/create/create.component';
import { ToastrModule } from 'ngx-toastr';
import { maxHeaderSize } from 'http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    
    RegisterComponent,
    
    BackgroundimageComponent,
         MainComponent,
         PageNotFoundComponent,
         EmployeeComponent,
         CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


