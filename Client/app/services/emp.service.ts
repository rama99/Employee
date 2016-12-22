import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Employee } from '../viewModels/Employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {

    error:string;
    url:string = 'http://localhost:49613/api/Employee';
    constructor(private http:Http) {

    }

    GetEmployees(DeptID?:number) {

    }

    AddEmployee(employee:Employee):Observable<any> {

        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(this.url , JSON.stringify(employee) , {headers:headers});
    }

    GetAllEmployees():Observable<Employee> {
        return this.http.get(this.url).map(data => data.json());
    }
}