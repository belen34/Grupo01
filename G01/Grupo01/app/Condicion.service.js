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
var Condicion_1 = require('./Condicion');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var CondicionService = (function () {
    function CondicionService(http) {
        this.http = http;
        //maximo: number = 4;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers2 = new http_1.Headers({ 'Accept': 'application/json' });
        this.CondicionsUrl = '/api/Reglas'; // URL to web api
    }
    CondicionService.prototype.getCondicions = function () {
        return this.http.get(this.CondicionsUrl, { headers: this.headers2 })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CondicionService.prototype.getCondicion = function (CondicionId) {
        return this.getCondicions()
            .then(function (Condicions) { return Condicions.find(function (Condicion) { return Condicion.condicionId === CondicionId; }); });
    };
    CondicionService.prototype.delete = function (index) {
        var url = this.CondicionsUrl + "/" + index;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CondicionService.prototype.addCondicion = function (operadorId, t1, t2) {
        var p = new Condicion_1.Condicion(0, operadorId, t1, t2);
        return this.http
            .post(this.CondicionsUrl, JSON.stringify(p), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CondicionService.prototype.updateCondicion = function (Condicion) {
        var url = this.CondicionsUrl + "/" + Condicion.CondicionId;
        return this.http
            .put(url, JSON.stringify(Condicion), { headers: this.headers })
            .toPromise()
            .then(function () { return Condicion; })
            .catch(this.handleError);
    };
    CondicionService.prototype.handleError = function (error) {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    };
    CondicionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CondicionService);
    return CondicionService;
}());
exports.CondicionService = CondicionService;
//# sourceMappingURL=Condicion.service.js.map