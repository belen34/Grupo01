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
var LogicosDeleteComponent = (function () {
    function LogicosDeleteComponent(logicoService, route) {
        this.logicoService = logicoService;
        this.route = route;
    }
    LogicosDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.logicoService.delete(id)
                .then(function (logico) { return _this.logico = logico; });
        });
    };
    LogicosDeleteComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LogicosDeleteComponent.prototype.goBack = function () {
        window.history.back();
    };
    LogicosDeleteComponent = __decorate([
        core_1.Component({
            selector: 'my-logico-delete',
            templateUrl: './app/logico.delete.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [logico_service_1.LogicoService, router_1.ActivatedRoute])
    ], LogicosDeleteComponent);
    return LogicosDeleteComponent;
}());
exports.LogicosDeleteComponent = LogicosDeleteComponent;
//# sourceMappingURL=logicos.delete.component.js.map