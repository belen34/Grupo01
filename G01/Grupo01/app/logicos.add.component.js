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
var LogicosAddComponent = (function () {
    function LogicosAddComponent(LogicoService, route) {
        this.LogicoService = LogicoService;
        this.route = route;
    }
    LogicosAddComponent.prototype.ngOnInit = function () {
    };
    LogicosAddComponent.prototype.addOperador = function (name) {
        this.LogicoService.addLogico(name);
    };
    LogicosAddComponent.prototype.goBack = function () {
        window.history.back();
    };
    LogicosAddComponent = __decorate([
        core_1.Component({
            selector: 'my-logico-detail',
            templateUrl: './app/logico.add.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [logico_service_1.LogicoService, router_1.ActivatedRoute])
    ], LogicosAddComponent);
    return LogicosAddComponent;
}());
exports.LogicosAddComponent = LogicosAddComponent;
//# sourceMappingURL=logicos.add.component.js.map