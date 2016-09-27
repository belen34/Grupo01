import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { LogicosComponent } from './logicos.component';


import { LogicosAddComponent } from './logicos.add.component';
import { LogicosDeleteComponent } from './logicos.delete.component';
import { LogicosDetailComponent } from './logicos.detail.component';
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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);