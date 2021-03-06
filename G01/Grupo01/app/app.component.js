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
//import { ROUTER_DIRECTIVES } from '@angular/router';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Motor de reglas';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n   <a id= \"dashboard\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n   <a id= \"logicos\" [routerLink]=\"['/logicos']\" routerLinkActive=\"active\">Operadores logicos</a>\n   <a id= \"condiciones\" [routerLink]=\"['/condiciones']\" routerLinkActive=\"active\">condiciones</a>\n   <a id= \"reglas\" [routerLink]=\"['/reglas']\" routerLinkActive=\"active\">reglas</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ",
            styleUrls: ['./app/logicos.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map