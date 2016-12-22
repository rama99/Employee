"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var dept_service_1 = require("../services/dept.service");
var emp_service_1 = require("../services/emp.service");
var EmpAddComponent = (function () {
    function EmpAddComponent(empService, deptService, formbuilder, router) {
        this.empService = empService;
        this.deptService = deptService;
        this.formbuilder = formbuilder;
        this.router = router;
    }
    EmpAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deptService.GetDepts().subscribe(function (data) {
            _this.depts = data;
            _this.depts.unshift({ DeptID: 0, DeptName: 'Select a Department' });
        });
        this.formgroup = this.formbuilder.group({
            "FirstName": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "LastName": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "DeptID": [0, forms_1.Validators.compose([forms_1.Validators.pattern('^[1-9][0-9]*$')])]
        });
    };
    EmpAddComponent.prototype.onClick = function () {
        var _this = this;
        if (!this.formgroup.valid) {
            this.error = "Enter value for all fields";
        }
        else {
            this.formgroup.value.EmpID = 0;
            this.empService.AddEmployee(this.formgroup.value).subscribe(function (data) {
                _this.router.navigate(['emp/list']);
            });
        }
    };
    return EmpAddComponent;
}());
EmpAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'emp-add',
        template: "\n<h3>New Employee</h3>\n{{error}}\n<form [formGroup]=\"formgroup\" (submit)=\"onClick()\">\n<input type=\"text\" formControlName=\"FirstName\" class=\"form-control\" placeholder=\"First Name\">\n<input type=\"text\" formControlName=\"LastName\" class=\"form-control\" placeholder=\"Last Name\">\n<select formControlName=\"DeptID\" class=\"form-control\">\n    <option [value]=\"dept.DeptID\" *ngFor=\"let dept of depts\">\n        {{dept.DeptName}}\n    </option>\n</select>\n<br>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Add  Employee\">\n</form>\n"
    }),
    __metadata("design:paramtypes", [emp_service_1.EmpService, dept_service_1.DeptService,
        forms_1.FormBuilder,
        router_1.Router])
], EmpAddComponent);
exports.EmpAddComponent = EmpAddComponent;
//# sourceMappingURL=emp-add.component.js.map