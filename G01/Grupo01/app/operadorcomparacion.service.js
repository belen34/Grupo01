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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var OperadorComparacionService = (function () {
    function OperadorComparacionService(http) {
        this.http = http;
        //maximo: number = 4;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers2 = new http_1.Headers({ 'Accept': 'application/json' });
        this.operadorcomparacionssUrl = '/api/operadorcomparacions'; // URL to web api
    }
    OperadorComparacionService.prototype.getoperadorcomparacions = function () {
        return this.http.get(this.operadorcomparacionssUrl, { headers: this.headers2 })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OperadorComparacionService.prototype.getoperadorcomparacion = function (operadorcomparacionId) {
        return this.getoperadorcomparacions()
            .then(function (operadorcomparacions) { return operadorcomparacions.find(function (operadorcomparacion) { return operadorcomparacion.operadorComparacionId === operadorcomparacionId; }); });
    };
    OperadorComparacionService.prototype.handleError = function (error) {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    };
    OperadorComparacionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OperadorComparacionService);
    return OperadorComparacionService;
}());
exports.OperadorComparacionService = OperadorComparacionService;
//# sourceMappingURL=operadorcomparacion.service.js.map