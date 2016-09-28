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
var regla_1 = require('./regla');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var ReglaService = (function () {
    function ReglaService(http) {
        this.http = http;
        //maximo: number = 4;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headers2 = new http_1.Headers({ 'Accept': 'application/json' });
        this.reglassUrl = '/api/Reglas'; // URL to web api
    }
    ReglaService.prototype.getReglas = function () {
        return this.http.get(this.reglassUrl, { headers: this.headers2 })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ReglaService.prototype.getRegla = function (reglaId) {
        return this.getReglas()
            .then(function (reglas) { return reglas.find(function (regla) { return regla.reglaId === reglaId; }); });
    };
    ReglaService.prototype.delete = function (index) {
        var url = this.reglassUrl + "/" + index;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ReglaService.prototype.addRegla = function (name) {
        var p = new regla_1.Regla(0, name);
        return this.http
            .post(this.reglassUrl, JSON.stringify(p), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ReglaService.prototype.updateRegla = function (regla) {
        var url = this.reglassUrl + "/" + regla.reglaId;
        return this.http
            .put(url, JSON.stringify(regla), { headers: this.headers })
            .toPromise()
            .then(function () { return regla; })
            .catch(this.handleError);
    };
    ReglaService.prototype.handleError = function (error) {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    };
    ReglaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReglaService);
    return ReglaService;
}());
exports.ReglaService = ReglaService;
//# sourceMappingURL=regla.service.js.map