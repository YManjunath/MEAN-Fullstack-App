import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { GetEmployeeComponent } from './components/get-employee/get-employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'login', component:LoginComponent},
  {path:'employees/addEmployee', component:AddEmployeeComponent},
  {path:'employees/addEmployee/:id', component:AddEmployeeComponent},
  {path:'employees', component:GetEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
