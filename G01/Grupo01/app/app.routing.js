"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var logicos_component_1 = require('./logicos.component');
var Condicions_component_1 = require('./Condicions.component');
var logicos_add_component_1 = require('./logicos.add.component');
var logicos_delete_component_1 = require('./logicos.delete.component');
var logicos_detail_component_1 = require('./logicos.detail.component');
var Condicions_add_component_1 = require('./Condicions.add.component');
var Condicions_delete_component_1 = require('./Condicions.delete.component');
var Condicions_detail_component_1 = require('./Condicions.detail.component');
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
        path: 'condiciones',
        component: Condicions_component_1.CondicionsComponent
    },
    {
        path: 'reglas',
        component: Condicions_component_1.CondicionsComponent
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
        path: 'addCondicion',
        component: Condicions_add_component_1.CondicionsAddComponent
    },
    {
        path: 'delete/:id',
        component: Condicions_delete_component_1.CondicionsDeleteComponent
    },
    {
        path: 'detail/:id',
        component: Condicions_detail_component_1.CondicionsDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map