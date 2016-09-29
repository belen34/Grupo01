import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { LogicosComponent } from './logicos.component';
import { CondicionsComponent } from './Condicions.component';
import { ReglasComponent } from './reglas.component';

import { LogicosAddComponent } from './logicos.add.component';
import { LogicosDeleteComponent } from './logicos.delete.component';
import { LogicosDetailComponent } from './logicos.detail.component';

import { CondicionsAddComponent } from './Condicions.add.component';
import { CondicionsDeleteComponent } from './Condicions.delete.component';
import { CondicionsDetailComponent } from './Condicions.detail.component';


import { ReglasAddComponent } from './reglas.add.component';
import { ReglasDeleteComponent } from './reglas.delete.component';
import { ReglasDetailComponent } from './reglas.detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
        
    }, 
    {       
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'logicos',
        component: LogicosComponent
    },
    {
        path: 'condiciones',
        component: CondicionsComponent
    },
    {
        path: 'reglas',
        component: ReglasComponent
    },
    {
        path: 'deletelogico/:id',
        component: LogicosDeleteComponent
    },

    {
        path: 'detaillogico/:id',
        component: LogicosDetailComponent
    },
    {
        path: 'addLogico',
        component: LogicosAddComponent
    },
    {
        path: 'addCondicion',
        component: CondicionsAddComponent
    },
    {
        path: 'delete/:id',
        component: CondicionsDeleteComponent
    },
    {
        path: 'detail/:id',
        component: CondicionsDetailComponent
    },
    {
        path: 'deleteregla/:id',
        component: ReglasDeleteComponent
    },

    {
        path: 'detailregla/:id',
        component: ReglasDetailComponent
    },
    {
        path: 'addregla',
        component: ReglasAddComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);