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
var LogicosDetailComponent = (function () {
    function LogicosDetailComponent(route, LogicoService) {
        this.route = route;
        this.LogicoService = LogicoService;
    }
    LogicosDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.LogicoService.getLogico(id)
                .then(function (logico) { return _this.logico = logico; });
        });
    };
    LogicosDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LogicosDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    LogicosDetailComponent.prototype.save = function () {
        this.LogicoService.updateLogico(this.logico)
            .then(this.goBack);
    };
    LogicosDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-logico-detail',
            templateUrl: './app/logico.detail.component.html',
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, logico_service_1.LogicoService])
    ], LogicosDetailComponent);
    return LogicosDetailComponent;
}());
exports.LogicosDetailComponent = LogicosDetailComponent;
//# sourceMappingURL=logicos.detail.component.js.map