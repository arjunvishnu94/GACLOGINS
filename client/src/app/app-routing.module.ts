import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { CreateComponent } from './employee/create/create.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  

{

              path:'login',
              component :LoginComponent
},
{
        path:'main',
        component:MainComponent
},
{
   path:'',
   redirectTo:'login',
   pathMatch:'full'

},
{
  path:'**',
  component:PageNotFoundComponent
}
//  {

//   path:'create',
//   component :CreateComponent
//  },

// {

//   path:'',
//   component :EmployeeComponent
// }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
