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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DeptService = (function () {
    function DeptService(http) {
        this.http = http;
        this.url = 'http://localhost:49613/api/Department';
    }
    DeptService.prototype.GetDepts = function () {
        return this.http.get(this.url)
            .map(function (data) { return data.json(); });
    };
    DeptService.prototype.AddDept = function (dept) {
        try {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            return this.http.post(this.url, JSON.stringify(dept), { headers: headers })
                .map(function (data) { return data.json(); });
        }
        catch (err) {
            alert(err);
        }
    };
    DeptService.prototype.GetDeptEmps = function (DeptID) {
        return this.http.get('http://localhost:49613/Department/' + DeptID + '/Employees')
            .map(function (data) { return data.json(); });
    };
    return DeptService;
}());
DeptService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeptService);
exports.DeptService = DeptService;
//# sourceMappingURL=dept.service.js.map