import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  

  constructor(private loginAuth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({

    email : new FormControl('',[Validators.required,Validators.email]),
    pwd : new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]),
});

isUserValid: boolean;

loginSubmited(){

  this.loginAuth
  .loginUser([this.loginForm.value.email,this.loginForm.value.pwd])
  .subscribe(res =>{
    if (res == 'Failure'){
      this.isUserValid = false;
      alert('Login Failed')
    } else {

     
this.isUserValid = true;
 localStorage.setItem('token',this.loginForm.value.email)
 this.router.navigateByUrl('/main');

    }
  });

}


get Email():FormControl{

  return this.loginForm.get('email') as FormControl;
}

get PWD():FormControl{

  return this.loginForm.get('pwd') as FormControl
}
}