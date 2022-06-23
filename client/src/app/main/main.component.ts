import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  loggedinUser : string;


  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
   loggedin() {
    
    this.loggedinUser = localStorage.getItem('token')
    return this.loggedinUser;

   }

   onLogout()
   {
     localStorage.removeItem('token');
     this.router.navigateByUrl('/login');

   }

}

