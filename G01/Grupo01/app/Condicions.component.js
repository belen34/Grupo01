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
var CondicionsComponent = (function () {
    function CondicionsComponent(router, CondicionService) {
        this.router = router;
        this.CondicionService = CondicionService;
    }
    CondicionsComponent.prototype.getCondicions = function () {
        var _this = this;
        this.CondicionService.getCondicions()
            .then(function (Condicions) { return _this.Condicions = Condicions; });
    };
    CondicionsComponent.prototype.ngOnInit = function () {
        this.getCondicions();
    };
    CondicionsComponent.prototype.onSelect = function (Condicion) {
        this.selectedCondicion = Condicion;
    };
    CondicionsComponent.prototype.gotoDetail = function (Condicion) {
        console.log("En el detalle", Condicion.CondicionId);
        this.router.navigate(['/detail', Condicion.CondicionId]);
    };
    CondicionsComponent.prototype.delete = function (Condicion) {
        this.router.navigate(['/delete', Condicion.CondicionId]);
    };
    CondicionsComponent = __decorate([
        core_1.Component({
            selector: 'my-Condicions',
            templateUrl: './app/Condicions.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, Condicion_service_1.CondicionService])
    ], CondicionsComponent);
    return CondicionsComponent;
}());
exports.CondicionsComponent = CondicionsComponent;
//# sourceMappingURL=Condicions.component.js.map