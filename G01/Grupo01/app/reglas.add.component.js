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
var router_1 = require('@angular/router');
var regla_service_1 = require('./regla.service');
var operadorcomparacion_service_1 = require('./operadorcomparacion.service');
var ReglasAddComponent = (function () {
    function ReglasAddComponent(reglaService, route, operadorcomparacionService) {
        this.reglaService = reglaService;
        this.route = route;
        this.operadorcomparacionService = operadorcomparacionService;
    }
    ReglasAddComponent.prototype.getoperadorcomparacions = function () {
        var _this = this;
        this.operadorcomparacionService.getoperadorcomparacions().then(function (operador) { return _this.operadors
            = operador; });
    };
    ReglasAddComponent.prototype.ngOnInit = function () {
        this.getoperadorcomparacions();
    };
    ReglasAddComponent.prototype.addregla = function (operadorId, t1, t2) {
        this.reglaService.addregla(operadorId, t1, t2);
    };
    ReglasAddComponent.prototype.goBack = function () {
        window.history.back();
    };
    ReglasAddComponent = __decorate([
        core_1.Component({
            selector: 'my-regla-detail',
            templateUrl: './app/regla.add.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [regla_service_1.ReglaService, router_1.ActivatedRoute, operadorcomparacion_service_1.OperadorComparacionService])
    ], ReglasAddComponent);
    return ReglasAddComponent;
}());
exports.ReglasAddComponent = ReglasAddComponent;
//# sourceMappingURL=reglas.add.component.js.map