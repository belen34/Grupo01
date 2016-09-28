import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { LogicosComponent } from './logicos.component';
import { ReglasComponent } from './reglas.component';

import { LogicosAddComponent } from './logicos.add.component';
import { LogicosDeleteComponent } from './logicos.delete.component';
import { LogicosDetailComponent } from './logicos.detail.component';

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
        path: 'addregla',
        component: ReglasAddComponent
    },
    {
        path: 'delete/:id',
        component: ReglasDeleteComponent
    },
    {
        path: 'detail/:id',
        component: ReglasDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);