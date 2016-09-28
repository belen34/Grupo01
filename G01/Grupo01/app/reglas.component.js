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
var ReglasComponent = (function () {
    function ReglasComponent(router, reglaService) {
        this.router = router;
        this.reglaService = reglaService;
    }
    ReglasComponent.prototype.getReglas = function () {
        var _this = this;
        this.reglaService.getReglas()
            .then(function (reglas) { return _this.reglas = reglas; });
    };
    ReglasComponent.prototype.ngOnInit = function () {
        this.getReglas();
    };
    ReglasComponent.prototype.onSelect = function (regla) {
        this.selectedRegla = regla;
    };
    ReglasComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detailregla', this.selectedRegla.reglaId]);
    };
    ReglasComponent.prototype.delete = function (regla) {
        this.router.navigate(['/deleteregla', regla.reglaId]);
    };
    ReglasComponent = __decorate([
        core_1.Component({
            selector: 'my-reglas',
            templateUrl: './app/reglas.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, regla_service_1.ReglaService])
    ], ReglasComponent);
    return ReglasComponent;
}());
exports.ReglasComponent = ReglasComponent;
//# sourceMappingURL=reglas.component.js.map