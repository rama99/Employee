import { Component , OnInit , OnChanges , DoCheck , OnDestroy } from '@angular/core';
import { DeptService } from '../services/dept.service';
import { Observable } from 'rxjs/Observable';
import { Dept } from '../viewModels/Dept';

@Component({
moduleId:module.id,   
selector:'dept-list',
template:`
<h3>All Departments</h3>
<ul>
    <li *ngFor="let dept of depts$ | async">
     <a [routerLink]="['dept/emplist',dept.DeptID ]">{{dept.DeptName}}</a>
    </li>
</ul>
`
})


export class DeptListComponent implements OnInit {

    depts$:Observable<Array<Dept>>;

    constructor(private deptService:DeptService) {}

    ngOnInit() {
        this.depts$ = this.deptService.GetDepts();
    }
}