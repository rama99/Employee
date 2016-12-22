import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Dept } from '../viewModels/Dept';
import { Employee } from '../viewModels/Employee';

@Injectable()
export class DeptService {
private url:string = 'http://localhost:49613/api/Department';
constructor(private http: Http) { }

GetDepts():Observable<Array<Dept>> {

    return   this.http.get(this.url)
             .map(data => data.json());
}

AddDept(dept:Dept):Observable<Dept> {

    try {
            var headers = new Headers();
            headers.append('Content-Type' ,'application/json');  
            return this.http.post(this.url,JSON.stringify(dept),{headers:headers})
             .map(data => data.json());
        }
    catch(err) {
        alert(err);
    }
}

GetDeptEmps(DeptID:number):Observable<Array<Employee>> {
    return    this.http.get('http://localhost:49613/Department/' + DeptID + '/Employees')
              .map(data => data.json());
}

}