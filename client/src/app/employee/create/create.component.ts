import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from 'src/app/employee-service.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private empService:EmployeeServiceService , private toast:ToastrService,private router :Router) { }

  data = {
     firstName:'',
     lastName:'',
     userName:'xxxx',
     passWord:'xx',
     email:'xxx',
    pwd:'xx',
      role:'x',
      office:'x',
      active:'x',
    id:5
 }

  ngOnInit(): void {}

  onSubmit(){


    console.log('clicked',this.data)

this.empService.postEmployees(this.data).subscribe((res:any) =>{

  console.log({res})

 
//   this.toast.success('sucessfully added','sucess')
// if(res.success == 1){
//   this.router.navigate(['create']);
// }
 })


  }

}






