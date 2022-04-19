import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmpResult } from '../shared/emp.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private readonly apiHost = environment.employeeMiddleware.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  addEmployee(empData: any){
    const objToSave = {
      firstName: empData.firstName,
      lastName: empData.lastName,
      email: empData.email,
      phone: empData.phone,
      timestamp: empData.timeStamp
    }
    console.log(objToSave)
    this.http.post(`${this.apiHost}/addEmployee`,objToSave).subscribe((res)=>{
      console.log('Employee Added Successfully')
    }, (err)=>{
      console.log(err)
    })
  }

  getEmployees(): Observable<EmpResult[]>{
    const url = `${this.apiHost}`
    return this.http.get<EmpResult[]>(url)

  }

  editEmployee(id:any){
    return this.http.get(`${this.apiHost}/editEmployee/${id}`)
  }

  updateEmployee(id: any, empData:any){
    return this.http.post(`${this.apiHost}/updateEmployee/${id}`, empData).subscribe(res=>{
      console.log(res, '***** updated')
    },(err)=>{
      console.log(err, 'Error Occured !')
    })
  }

  deleteEmp(id:any){
    return this.http.delete(`${this.apiHost}/delete/${id}`).subscribe(res=>{
      console.log('deleted')
    },(err)=>{
      console.log(err)
    })
  }
}
