import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeServiceService,private router:Router) {}

   employeeArray:any=[]
  ngOnInit() {

    this.empService.getEmployees().subscribe((res:any)  => {
console.log({res})
 
  this.employeeArray =res

 
    })
  }

  navigate(){

this.router.navigate(['create'])

  }

}
