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
var DeptAddComponent = (function () {
    function DeptAddComponent(formbuilder, service, router) {
        this.formbuilder = formbuilder;
        this.service = service;
        this.router = router;
    }
    DeptAddComponent.prototype.ngOnInit = function () {
        this.formgroup = this.formbuilder.group({
            "DeptName": ["", forms_1.Validators.compose([forms_1.Validators.required])]
        });
    };
    DeptAddComponent.prototype.onAdd = function () {
        var _this = this;
        if (this.formgroup.valid) {
            var dept = this.formgroup.value;
            dept.DeptID = 0;
            this.service.AddDept(dept).subscribe(function (data) {
                _this.router.navigate(['/']);
            });
        }
        else {
            this.error = "Please enter a value";
        }
    };
    return DeptAddComponent;
}());
DeptAddComponent = __decorate([
    core_1.Component({
        selector: 'dept-add',
        template: "\n<h3>New Department</h3>\n\n{{error}}\n<form [formGroup]=\"formgroup\" (submit)=\"onAdd()\">\n\n<input type=\"text\" placeholder=\"Dept Name\" formControlName=\"DeptName\" class=\"form-control\">\n<br>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">\n</form>\n"
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, dept_service_1.DeptService, router_1.Router])
], DeptAddComponent);
exports.DeptAddComponent = DeptAddComponent;
//# sourceMappingURL=dept-add.component.js.map