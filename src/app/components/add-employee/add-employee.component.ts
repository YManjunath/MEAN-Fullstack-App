import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  iconTab:FormGroup;
  empEditData: any;
  showUpdateBtn: Boolean = false;
  editId:any;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }


    

  ngOnInit(): void {
    this.iconTab = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    })

    this.route.params.subscribe(params=>{
      this.editId = params['id']
      if(this.editId){
        this.showUpdateBtn = true;
      }
      this.empService.editEmployee(params['id']).subscribe(resp=>{
        this.empEditData = resp;
        this.iconTab.patchValue(resp);
      })
    })
  }

  resetEmployee(){
    this.iconTab.reset()
  }

  addEmployee(){
    if(!this.iconTab.value.firstName || !this.iconTab.value.lastName || !this.iconTab.value.email || !this.iconTab.value.phone){
      this.toastr.error('Please enter mandatory fields !');
      return;
    }
    console.log('empData', this.iconTab.value)
    this.empService.addEmployee({...this.iconTab.value, timeStamp: Date.now()});
    this.toastr.success('Employee Added Succesfully !');
    this.resetEmployee()
  }

  updateEmployee(){
    let isMatch = _.isMatch(this.empEditData, this.iconTab.value);
    if(isMatch){
      this.toastr.error('No changes made to update !');
      return;
    }
    if(!this.iconTab.value.firstName || !this.iconTab.value.lastName || !this.iconTab.value.email || !this.iconTab.value.phone){
      this.toastr.error('Please enter mandatory fields !');
      return;
    }
    let objupdate = {
      ...this.iconTab.value
    }
    console.log('obj to save*****', objupdate)
    this.empService.updateEmployee(this.editId,objupdate);
    this.toastr.success('Employee Updated Succesfully !');
    this.resetEmployee()
  }

}
