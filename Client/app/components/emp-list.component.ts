import { Component  , OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../viewModels/Employee';
import { EmpService } from '../services/emp.service';

@Component({
moduleId:module.id,
selector:'emp-list',
template: `
<h3>All Employees</h3>

<ul>
    <li *ngFor="let employee of employees$ | async">
        {{employee.FirstName}}  {{employee.LastName}}
    </li>
</ul>

`

})

export class EmpListComponent implements  OnInit{

    employees$:Observable<Employee>
    constructor(private empService:EmpService) {}

    ngOnInit() {
        this.employees$ = this.empService.GetAllEmployees();
    }
}