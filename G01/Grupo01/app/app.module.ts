import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { LogicosComponent } from './logicos.component';
import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard.component';


import { LogicoService } from './logico.service';

import { LogicosAddComponent } from './logicos.add.component';
import { LogicosDeleteComponent } from './logicos.delete.component';
import { LogicosDetailComponent } from './logicos.detail.component';


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
       
        LogicosComponent,
        LogicosAddComponent,
        LogicosDeleteComponent,
        LogicosDetailComponent
    ],
   
    
    providers: [
        LogicoService
       
    ]
    ,
    bootstrap: [AppComponent]
})
export class AppModule { }
