import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './employee/create/create.component';
const routes: Routes = [
  

{path:'login',component :LoginComponent},
{path:'main',component:MainComponent},
{path:'employee',component:EmployeeComponent},
{path:'create',component:CreateComponent},
{path:'edit/:id',component:CreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

