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
var logico_1 = require('./logico');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var LogicoService = (function () {
    function LogicoService(http) {
        this.http = http;
        //maximo: number = 4;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.logicosUrl = '/api/OperardorLogicos'; // URL to web api
        this.headers2 = new http_1.Headers({ 'Accept': 'application/json' });
    }
    LogicoService.prototype.getlogicos = function () {
        return this.http.get(this.logicosUrl, { headers: this.headers2 })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LogicoService.prototype.getLogico = function (logicoId) {
        return this.getlogicos()
            .then(function (logicos) { return logicos.find(function (logico) { return logico.logicoId === logicoId; }); });
    };
    LogicoService.prototype.delete = function (index) {
        var url = this.logicosUrl + "/" + index;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LogicoService.prototype.addLogico = function (name) {
        var p = new logico_1.Logico(0, name);
        return this.http
            .post(this.logicosUrl, JSON.stringify(p), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LogicoService.prototype.updateLogico = function (logico) {
        var url = this.logicosUrl + "/" + logico.logicoId;
        return this.http
            .put(url, JSON.stringify(logico), { headers: this.headers })
            .toPromise()
            .then(function () { return logico; })
            .catch(this.handleError);
    };
    LogicoService.prototype.handleError = function (error) {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    };
    LogicoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LogicoService);
    return LogicoService;
}());
exports.LogicoService = LogicoService;
//# sourceMappingURL=logico.service.js.map