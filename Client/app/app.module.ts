import { NgModule  } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DeptListComponent } from './components/dept-list.component';
import { DeptAddComponent } from './components/dept-add.component';
import { EmpService } from './services/emp.service';
import { DeptService } from './services/dept.service';
import { EmpAddComponent } from './components/emp-add.component';
import { EmpListComponent  } from './components/emp-list.component';
import { DeptEmpComponent } from './components/dept-emp-list.component';
import { PageNotFound } from './components/404';

@NgModule({
imports:[BrowserModule , HttpModule , FormsModule , ReactiveFormsModule , 
RouterModule.forRoot([
    {path:'' , component:DeptListComponent},
    {path:'dept/add' , component:DeptAddComponent},
    {path:'emp/add' , component:EmpAddComponent},
    {path:'emp/list' , component:EmpListComponent},
    {path:'dept/emplist/:deptid' , component:DeptEmpComponent},
    {path:'**', component:PageNotFound}
])
],
exports:[],
declarations:[ AppComponent , 
               DeptListComponent , 
               DeptAddComponent ,
               EmpAddComponent ,
               EmpListComponent ,
               DeptEmpComponent ,
               PageNotFound],
providers:[ DeptService , EmpService],
bootstrap:[AppComponent]
})



export class AppModule {}