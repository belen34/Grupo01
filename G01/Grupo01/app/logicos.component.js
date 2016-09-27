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
var logico_service_1 = require('./logico.service');
var LogicosComponent = (function () {
    function LogicosComponent(router, logicoService) {
        this.router = router;
        this.logicoService = logicoService;
    }
    LogicosComponent.prototype.getLogicos = function () {
        var _this = this;
        this.logicoService.getlogicos()
            .then(function (logicos) { return _this.logicos = logicos; });
    };
    LogicosComponent.prototype.ngOnInit = function () {
        this.getLogicos();
    };
    LogicosComponent.prototype.onSelect = function (logico) {
        this.selectedLogico = logico;
    };
    LogicosComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detaillogico', this.selectedLogico.logicoId]);
    };
    LogicosComponent.prototype.delete = function (logico) {
        console.log("El valor seleccionado", logico.logicoId);
        this.router.navigate(['/deletelogico', logico.logicoId]);
    };
    LogicosComponent = __decorate([
        core_1.Component({
            selector: 'my-logicos',
            templateUrl: './app/logicos.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, logico_service_1.LogicoService])
    ], LogicosComponent);
    return LogicosComponent;
}());
exports.LogicosComponent = LogicosComponent;
//# sourceMappingURL=logicos.component.js.map