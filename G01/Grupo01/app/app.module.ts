import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { LogicosComponent } from './logicos.component';
import { CondicionsComponent } from './Condicions.component';
import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard.component';


import { LogicoService } from './logico.service';
import { CondicionService } from './Condicion.service';
import { OperadorComparacionService } from './operadorcomparacion.service';

import { LogicosAddComponent } from './logicos.add.component';
import { LogicosDeleteComponent } from './logicos.delete.component';
import { LogicosDetailComponent } from './logicos.detail.component';

import { CondicionsAddComponent } from './Condicions.add.component';
import { CondicionsDeleteComponent } from './Condicions.delete.component';
import { CondicionsDetailComponent } from './Condicions.detail.component';

import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        CondicionsComponent,
        LogicosComponent,
        LogicosAddComponent,
        LogicosDeleteComponent,
        LogicosDetailComponent,
        CondicionsAddComponent,
        CondicionsDeleteComponent,
        CondicionsDetailComponent
    ],
   
    
    providers: [
        LogicoService,
        CondicionService,
        OperadorComparacionService     
    ]
    ,
    bootstrap: [AppComponent]
})
export class AppModule { }
