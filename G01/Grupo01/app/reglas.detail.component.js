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
var ReglasDetailComponent = (function () {
    function ReglasDetailComponent(reglaService, route, operadorcomporacionService) {
        this.reglaService = reglaService;
        this.route = route;
        this.operadorcomporacionService = operadorcomporacionService;
    }
    ReglasDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.reglaService.getRegla(id)
                .then(function (regla) { return _this.regla = regla; });
        });
        this.getoperadorcomporacions();
    };
    ReglasDetailComponent.prototype.getoperadorcomporacions = function () {
        var _this = this;
        this.operadorcomporacionService.getoperadorcomparacions().then(function (operadorcomporacions) { return _this.operadorcomporacions
            = operadorcomporacions; });
    };
    ReglasDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ReglasDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    ReglasDetailComponent.prototype.save = function () {
        this.reglaService.updateregla(this.regla)
            .then(this.goBack);
    };
    ReglasDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-regla-detail',
            templateUrl: './app/regla.detail.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [regla_service_1.ReglaService, router_1.ActivatedRoute, operadorcomparacion_service_1.OperadorComparacionService])
    ], ReglasDetailComponent);
    return ReglasDetailComponent;
}());
exports.ReglasDetailComponent = ReglasDetailComponent;
//# sourceMappingURL=reglas.detail.component.js.map