import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { LogicosComponent } from './logicos.component';
import { ReglasComponent } from './reglas.component';
import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard.component';


import { LogicoService } from './logico.service';
import { ReglaService } from './regla.service';
import { OperadorComparacionService } from './operadorcomparacion.service';

import { LogicosAddComponent } from './logicos.add.component';
import { LogicosDeleteComponent } from './logicos.delete.component';
import { LogicosDetailComponent } from './logicos.detail.component';

import { ReglasAddComponent } from './reglas.add.component';
import { ReglasDeleteComponent } from './reglas.delete.component';
import { ReglasDetailComponent } from './reglas.detail.component';

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
        ReglasComponent,
        LogicosComponent,
        LogicosAddComponent,
        LogicosDeleteComponent,
        LogicosDetailComponent,
        ReglasAddComponent,
        ReglasDeleteComponent,
        ReglasDetailComponent
    ],
   
    
    providers: [
        LogicoService,
        ReglaService,
        OperadorComparacionService     
    ]
    ,
    bootstrap: [AppComponent]
})
export class AppModule { }
