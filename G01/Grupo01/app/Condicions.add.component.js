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
var CondicionsAddComponent = (function () {
    function CondicionsAddComponent(CondicionService, route, operadorcomparacionService) {
        this.CondicionService = CondicionService;
        this.route = route;
        this.operadorcomparacionService = operadorcomparacionService;
    }
    CondicionsAddComponent.prototype.getoperadorcomparacions = function () {
        var _this = this;
        this.operadorcomparacionService.getoperadorcomparacions().then(function (operador) { return _this.operadors
            = operador; });
    };
    CondicionsAddComponent.prototype.ngOnInit = function () {
        this.getoperadorcomparacions();
    };
    CondicionsAddComponent.prototype.addCondicion = function (operadorId, operadorlogico1, operadorlogico2, t1, t2) {
        this.CondicionService.addCondicion(operadorId, operadorlogico1, operadorlogico2, t1, t2);
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
        __metadata('design:paramtypes', [Condicion_service_1.CondicionService, router_1.ActivatedRoute, operadorcomparacion_service_1.OperadorComparacionService])
    ], CondicionsAddComponent);
    return CondicionsAddComponent;
}());
exports.CondicionsAddComponent = CondicionsAddComponent;
//# sourceMappingURL=Condicions.add.component.js.map