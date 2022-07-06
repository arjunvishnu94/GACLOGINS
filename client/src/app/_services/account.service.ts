import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //baseUrl ='https://localhost:5001/api/';
  baseUrl="https://api20220705123849.azurewebsites.net/api/";

  constructor(private http :HttpClient) { }


  login(model:any) {

    return this.http.post(this.baseUrl + 'account/login',model);
  }
}
