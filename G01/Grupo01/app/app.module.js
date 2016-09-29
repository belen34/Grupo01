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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var logicos_component_1 = require('./logicos.component');
var Condicions_component_1 = require('./Condicions.component');
var reglas_component_1 = require('./reglas.component');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var logico_service_1 = require('./logico.service');
var Condicion_service_1 = require('./Condicion.service');
var regla_service_1 = require('./regla.service');
var operadorcomparacion_service_1 = require('./operadorcomparacion.service');
var logicos_add_component_1 = require('./logicos.add.component');
var logicos_delete_component_1 = require('./logicos.delete.component');
var logicos_detail_component_1 = require('./logicos.detail.component');
var reglas_add_component_1 = require('./reglas.add.component');
var reglas_delete_component_1 = require('./reglas.delete.component');
var reglas_detail_component_1 = require('./reglas.detail.component');
var Condicions_add_component_1 = require('./Condicions.add.component');
var Condicions_delete_component_1 = require('./Condicions.delete.component');
var Condicions_detail_component_1 = require('./Condicions.detail.component');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                Condicions_component_1.CondicionsComponent,
                logicos_component_1.LogicosComponent,
                logicos_add_component_1.LogicosAddComponent,
                logicos_delete_component_1.LogicosDeleteComponent,
                logicos_detail_component_1.LogicosDetailComponent,
                Condicions_add_component_1.CondicionsAddComponent,
                Condicions_delete_component_1.CondicionsDeleteComponent,
                Condicions_detail_component_1.CondicionsDetailComponent,
                reglas_component_1.ReglasComponent,
                reglas_add_component_1.ReglasAddComponent,
                reglas_delete_component_1.ReglasDeleteComponent,
                reglas_detail_component_1.ReglasDetailComponent
            ],
            providers: [
                logico_service_1.LogicoService,
                Condicion_service_1.CondicionService,
                operadorcomparacion_service_1.OperadorComparacionService,
                regla_service_1.ReglaService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map