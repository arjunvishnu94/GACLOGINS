import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  baseServerUrl="https://api20220705123849.azurewebsites.net/api/Users";
  //baseServerUrl="https://localhost:5001/api/Users"

  getEmployees()

{
 
  return this.http.get<any>(this.baseServerUrl);
}


postEmployees(data:any) 
{


  return this.http.post<any>(this.baseServerUrl+'/InsertTableRow',data);

}


getEmployeesById(id:any)

{
   return this.http.get<any>(this.baseServerUrl+`/${id}`);
}

editEmployees(id:any,data:any)

{
   return this.http.put<any>(this.baseServerUrl+`/${id}`,data);
}

deleteEmployees(id:any)

{
   return this.http.delete<any>(this.baseServerUrl+`/${id}`);
}

}




