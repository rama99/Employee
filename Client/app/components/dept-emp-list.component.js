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
var router_1 = require("@angular/router");
var dept_service_1 = require("../services/dept.service");
var DeptEmpComponent = (function () {
    function DeptEmpComponent(router, route, deptService) {
        this.router = router;
        this.route = route;
        this.deptService = deptService;
    }
    DeptEmpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.DeptID = params['deptid'];
            _this.employees$ = _this.deptService.GetDeptEmps(_this.DeptID);
        });
    };
    return DeptEmpComponent;
}());
DeptEmpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '',
        template: "\n    <h3>Employees of Department</h3>\n\n    <ul>\n        <li *ngFor=\"let emp of employees$ | async\">\n         {{emp.FirstName}} {{emp.LastName}}\n        </li>\n    </ul>\n    \n    <a [routerLink]=\"['']\" class=\"btn btn-primary\">Back</a>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        dept_service_1.DeptService])
], DeptEmpComponent);
exports.DeptEmpComponent = DeptEmpComponent;
//# sourceMappingURL=dept-emp-list.component.js.map