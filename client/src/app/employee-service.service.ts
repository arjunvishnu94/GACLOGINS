import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }



getEmployees()

{

return this.http.get<any>('https://localhost:5001/api/Users')


}

postEmployees(data:any) {


  
  return this.http.post<any>('https://localhost:5001/api/Users',data)


}

}




