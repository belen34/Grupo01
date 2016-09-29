import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Condicion } from './Condicion';
import { CondicionService } from './Condicion.service';

import { OperadorComparacion } from './operadorcomparacion';
import { Logico } from './logico';
import { ReglaService } from './regla.service';
import { OperadorComparacionService } from './operadorcomparacion.service';
import { LogicoService } from './logico.service';
import { Regla } from './Regla';

@Component({
    selector: 'my-Condicion-detail',
    templateUrl: './app/Condicion.detail.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class CondicionsDetailComponent implements OnInit {
    Condicion: Condicion;
    reglas: Regla[];
    operadorcomporacions: OperadorComparacion[];
    operadorlogico1: Logico[];
    operadorlogico2: Logico[];
    sub: any;
    constructor(private CondicionService: CondicionService,
        private route: ActivatedRoute,
        private ReglaService: ReglaService,
        private operadorcomporacionService: OperadorComparacionService,
        private LogicoService: LogicoService ) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.CondicionService.getCondicion(id)
                .then(Condicion => this.Condicion = Condicion);
        });
        console.log("sfdghsf", this.Condicion );
        this.getoperadorcomporacions();
        this.getoperadorlogicos1();
        this.getoperadorlogicos2();
        this.getoperadorreglas();
    }

    getoperadorcomporacions(): void {
        this.operadorcomporacionService.getoperadorcomparacions().then(
            operadorcomporacions => this.operadorcomporacions
                = operadorcomporacions);
    }
    getoperadorlogicos1(): void {
        this.LogicoService.getlogicos().then(
            operadorlogico => this.operadorlogico1
                = operadorlogico);
    }
    getoperadorlogicos2(): void {
        this.LogicoService.getlogicos().then(
            operadorlogico => this.operadorlogico2
                = operadorlogico);
    }
    getoperadorreglas(): void {
        this.ReglaService.getReglas().then(
            reglas => this.reglas
                = reglas);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
    save(): void {
        
        this.CondicionService.updateCondicion(this.Condicion)
            .then(this.goBack);
    }
}