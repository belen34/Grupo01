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
var CondicionsDeleteComponent = (function () {
    function CondicionsDeleteComponent(CondicionService, route) {
        this.CondicionService = CondicionService;
        this.route = route;
    }
    CondicionsDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.CondicionService.delete(id);
        });
    };
    CondicionsDeleteComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CondicionsDeleteComponent.prototype.goBack = function () {
        window.history.back();
    };
    CondicionsDeleteComponent = __decorate([
        core_1.Component({
            selector: 'my-Condicion-delete',
            templateUrl: './app/Condicion.delete.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [Condicion_service_1.CondicionService, router_1.ActivatedRoute])
    ], CondicionsDeleteComponent);
    return CondicionsDeleteComponent;
}());
exports.CondicionsDeleteComponent = CondicionsDeleteComponent;
//# sourceMappingURL=Condicions.delete.component.js.map