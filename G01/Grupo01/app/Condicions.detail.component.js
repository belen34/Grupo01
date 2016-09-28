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
var logico_service_1 = require('./logico.service');
var CondicionsDetailComponent = (function () {
    function CondicionsDetailComponent(CondicionService, route, operadorcomporacionService, LogicoService) {
        this.CondicionService = CondicionService;
        this.route = route;
        this.operadorcomporacionService = operadorcomporacionService;
        this.LogicoService = LogicoService;
    }
    CondicionsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.CondicionService.getCondicion(id)
                .then(function (Condicion) { return _this.Condicion = Condicion; });
        });
        console.log("Condicion en el detail", this.Condicion);
        this.getoperadorcomporacions();
    };
    CondicionsDetailComponent.prototype.getoperadorcomporacions = function () {
        var _this = this;
        this.operadorcomporacionService.getoperadorcomparacions().then(function (operadorcomporacions) { return _this.operadorcomporacions
            = operadorcomporacions; });
    };
    CondicionsDetailComponent.prototype.getoperadorlogicos = function () {
        var _this = this;
        this.LogicoService.getlogicos().then(function (operadorlogico) { return _this.operadorlogico
            = operadorlogico; });
    };
    CondicionsDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CondicionsDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    CondicionsDetailComponent.prototype.save = function () {
        this.CondicionService.updateCondicion(this.Condicion)
            .then(this.goBack);
    };
    CondicionsDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-Condicion-detail',
            templateUrl: './app/Condicion.detail.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [Condicion_service_1.CondicionService, router_1.ActivatedRoute, operadorcomparacion_service_1.OperadorComparacionService, logico_service_1.LogicoService])
    ], CondicionsDetailComponent);
    return CondicionsDetailComponent;
}());
exports.CondicionsDetailComponent = CondicionsDetailComponent;
//# sourceMappingURL=Condicions.detail.component.js.map