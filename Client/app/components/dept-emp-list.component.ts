import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../viewModels/Employee';
import { EmpService } from '../services/emp.service';
import { DeptService } from '../services/dept.service';

@Component({
    moduleId:module.id,
    selector:'',
    template: `
    <h3>Employees of Department</h3>

    <ul>
        <li *ngFor="let emp of employees$ | async">
         {{emp.FirstName}} {{emp.LastName}}
        </li>
    </ul>
    
    <a [routerLink]="['']" class="btn btn-primary">Back</a>
    `
})


export class DeptEmpComponent implements OnInit {

    DeptID:number;
    employees$:Observable<Array<Employee>>;

    constructor( private router:Router , 
                 private route:ActivatedRoute ,
                 private deptService:DeptService) {

    }

    ngOnInit() {

        this.route.params.forEach( (params) => {

            this.DeptID = params['deptid'];           
            this.employees$ = this.deptService.GetDeptEmps(this.DeptID);

        });
    }
}