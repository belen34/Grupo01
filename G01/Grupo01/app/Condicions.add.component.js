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
var Condicion_service_1 = require('./Condicion.service');
var operadorcomparacion_service_1 = require('./operadorcomparacion.service');
var regla_service_1 = require('./regla.service');
var logico_service_1 = require('./logico.service');
var CondicionsAddComponent = (function () {
    function CondicionsAddComponent(ReglaService, CondicionService, route, operadorcomporacionService, LogicoService) {
        this.ReglaService = ReglaService;
        this.CondicionService = CondicionService;
        this.route = route;
        this.operadorcomporacionService = operadorcomporacionService;
        this.LogicoService = LogicoService;
    }
    CondicionsAddComponent.prototype.getoperadorcomporacions = function () {
        var _this = this;
        this.operadorcomporacionService.getoperadorcomparacions().then(function (operadorcomporacions) { return _this.operadorcomporacions
            = operadorcomporacions; });
    };
    CondicionsAddComponent.prototype.getoperadorlogicos1 = function () {
        var _this = this;
        this.LogicoService.getlogicos().then(function (operadorlogico) { return _this.operadorlogico1
            = operadorlogico; });
    };
    CondicionsAddComponent.prototype.getoperadorlogicos2 = function () {
        var _this = this;
        this.LogicoService.getlogicos().then(function (operadorlogico) { return _this.operadorlogico2
            = operadorlogico; });
    };
    CondicionsAddComponent.prototype.getoperadorreglas = function () {
        var _this = this;
        this.ReglaService.getReglas().then(function (reglas) { return _this.reglas
            = reglas; });
    };
    CondicionsAddComponent.prototype.ngOnInit = function () {
        this.getoperadorcomporacions();
        this.getoperadorlogicos1();
        this.getoperadorlogicos2();
        this.getoperadorreglas();
    };
    CondicionsAddComponent.prototype.addCondicion = function (reglaId, operadorco, operadorl1, operadorl2, t1, t2) {
        console.log("Valor de la regla", reglaId);
        this.CondicionService.addCondicion(reglaId, operadorco, operadorl1, operadorl2, t1, t2);
    };
    CondicionsAddComponent.prototype.goBack = function () {
        window.history.back();
    };
    CondicionsAddComponent = __decorate([
        core_1.Component({
            selector: 'my-Condicion-detail',
            templateUrl: './app/Condicion.add.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [regla_service_1.ReglaService, Condicion_service_1.CondicionService, router_1.ActivatedRoute, operadorcomparacion_service_1.OperadorComparacionService, logico_service_1.LogicoService])
    ], CondicionsAddComponent);
    return CondicionsAddComponent;
}());
exports.CondicionsAddComponent = CondicionsAddComponent;
//# sourceMappingURL=Condicions.add.component.js.map