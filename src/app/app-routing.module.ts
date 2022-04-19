import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { GetEmployeeComponent } from './components/get-employee/get-employee.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path:'/', redirectTo:'employees', component:GetEmployeeComponent},
  {path:'', component:HomeComponent},
  {path:'employees/addEmployee', component:AddEmployeeComponent},
  // {path:'employees/editEmployee/:id', component:EditEmployeeComponent},
  {path:'employees/addEmployee/:id', component:AddEmployeeComponent},
  {path:'employees', component:GetEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
