import { Component , OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators , FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { Dept } from '../viewModels/Dept';
import { DeptService } from '../services/dept.service';

@Component({
selector:'dept-add',
template: `
<h3>New Department</h3>

{{error}}
<form [formGroup]="formgroup" (submit)="onAdd()">

<input type="text" placeholder="Dept Name" formControlName="DeptName" class="form-control">
<br>
<input type="submit" class="btn btn-primary" value="Add">
</form>
`
})

export class DeptAddComponent implements OnInit {

    private formgroup:FormGroup;
    private error:string;


    constructor(private formbuilder:FormBuilder, private service:DeptService , private router: Router) {

    }

    ngOnInit() {

        this.formgroup =   this.formbuilder.group({
                            "DeptName":["",Validators.compose([Validators.required])]
                            });
    }

    onAdd() {

        if(this.formgroup.valid) 
        {
            let dept = this.formgroup.value;
            dept.DeptID = 0;
            this.service.AddDept(dept).subscribe(data => {
            this.router.navigate(['/']);
            });  
        }
        else 
        {
            this.error = "Please enter a value";
        }
    }

}