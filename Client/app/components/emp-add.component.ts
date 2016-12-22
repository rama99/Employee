import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup , FormBuilder , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DeptService } from '../services/dept.service';
import { EmpService } from '../services/emp.service';
import { Dept } from '../viewModels/Dept';

@Component({
moduleId:module.id,
selector:'emp-add',
template:`
<h3>New Employee</h3>
{{error}}
<form [formGroup]="formgroup" (submit)="onClick()">
<input type="text" formControlName="FirstName" class="form-control" placeholder="First Name">
<input type="text" formControlName="LastName" class="form-control" placeholder="Last Name">
<select formControlName="DeptID" class="form-control">
    <option [value]="dept.DeptID" *ngFor="let dept of depts">
        {{dept.DeptName}}
    </option>
</select>
<br>
<input type="submit" class="btn btn-primary" value="Add  Employee">
</form>
`

})

export class EmpAddComponent implements  OnInit{

    error:string;
    //depts$:Observable<Dept>;
    depts:Array<Dept>;
    formgroup:FormGroup;
    constructor( private empService:EmpService , private deptService:DeptService , 
                 private formbuilder:FormBuilder ,
                 private router:Router) {

    }

    ngOnInit() {
         this.deptService.GetDepts().subscribe((data) => {
          this.depts = data;          
           this.depts.unshift({DeptID:0,DeptName:'Select a Department'});
        }); 

      this.formgroup =  this.formbuilder.group({
            "FirstName": ["", Validators.compose([Validators.required])],
            "LastName": ["", Validators.compose([Validators.required])],
            "DeptID": [0, Validators.compose([Validators.pattern('^[1-9][0-9]*$')])]
        });
    }

    onClick() {
        
        if(!this.formgroup.valid) 
        {
            this.error = "Enter value for all fields";
        }
        else 
        {
            this.formgroup.value.EmpID = 0;
            this.empService.AddEmployee(this.formgroup.value).subscribe((data) => {
                this.router.navigate(['emp/list']);
            });
        }
    }
}