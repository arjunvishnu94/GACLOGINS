import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GAClogins';
  users: any;

 constructor(private http : HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }

    // baseServerUrl="https://localhost:5001/api/users";
   baseServerUrl="https://api20220705123849.azurewebsites.net/api/";

   getUsers() {

    this.http.get(this.baseServerUrl).subscribe(response=>{
    this.users=response;
    },error=>{
     console.log(error);
    
  })
  
}

}
