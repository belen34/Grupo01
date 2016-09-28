"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var logicos_component_1 = require('./logicos.component');
var reglas_component_1 = require('./reglas.component');
var logicos_add_component_1 = require('./logicos.add.component');
var logicos_delete_component_1 = require('./logicos.delete.component');
var logicos_detail_component_1 = require('./logicos.detail.component');
var reglas_add_component_1 = require('./reglas.add.component');
var reglas_delete_component_1 = require('./reglas.delete.component');
var reglas_detail_component_1 = require('./reglas.detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'logicos',
        component: logicos_component_1.LogicosComponent
    },
    {
        path: 'reglas',
        component: reglas_component_1.ReglasComponent
    },
    {
        path: 'deletelogico/:id',
        component: logicos_delete_component_1.LogicosDeleteComponent
    },
    {
        path: 'detaillogico/:id',
        component: logicos_detail_component_1.LogicosDetailComponent
    },
    {
        path: 'addLogico',
        component: logicos_add_component_1.LogicosAddComponent
    },
    {
        path: 'addregla',
        component: reglas_add_component_1.ReglasAddComponent
    },
    {
        path: 'delete/:id',
        component: reglas_delete_component_1.ReglasDeleteComponent
    },
    {
        path: 'detail/:id',
        component: reglas_detail_component_1.ReglasDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map