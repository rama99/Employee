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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var dept_list_component_1 = require("./components/dept-list.component");
var dept_add_component_1 = require("./components/dept-add.component");
var emp_service_1 = require("./services/emp.service");
var dept_service_1 = require("./services/dept.service");
var emp_add_component_1 = require("./components/emp-add.component");
var emp_list_component_1 = require("./components/emp-list.component");
var dept_emp_list_component_1 = require("./components/dept-emp-list.component");
var _404_1 = require("./components/404");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot([
                { path: '', component: dept_list_component_1.DeptListComponent },
                { path: 'dept/add', component: dept_add_component_1.DeptAddComponent },
                { path: 'emp/add', component: emp_add_component_1.EmpAddComponent },
                { path: 'emp/list', component: emp_list_component_1.EmpListComponent },
                { path: 'dept/emplist/:deptid', component: dept_emp_list_component_1.DeptEmpComponent },
                { path: '**', component: _404_1.PageNotFound }
            ])
        ],
        exports: [],
        declarations: [app_component_1.AppComponent,
            dept_list_component_1.DeptListComponent,
            dept_add_component_1.DeptAddComponent,
            emp_add_component_1.EmpAddComponent,
            emp_list_component_1.EmpListComponent,
            dept_emp_list_component_1.DeptEmpComponent,
            _404_1.PageNotFound],
        providers: [dept_service_1.DeptService, emp_service_1.EmpService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map