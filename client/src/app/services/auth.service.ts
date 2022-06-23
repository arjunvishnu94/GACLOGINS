import { HttpClient } from '@angular/common/http';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient) { }


  baseServerUrl="https://localhost:5001/api/";
  

  loginUser(loginInfo:Array<string>){

return this.http.post(this.baseServerUrl+'Users/LoginUser',{

  Email :loginInfo[0],
  Pwd: loginInfo[1]
},
{

  responseType:'text',
}



);


  }




}
