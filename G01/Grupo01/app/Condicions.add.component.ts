import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Condicion } from './Condicion';
import { Regla } from './Regla';

import { OperadorComparacion } from './operadorcomparacion';
import { CondicionService } from './Condicion.service';

import { OperadorComparacionService } from './operadorcomparacion.service';
import { Logico } from './logico';

import { ReglaService } from './regla.service';
import { LogicoService } from './logico.service';

@Component({
    selector: 'my-Condicion-detail',
    templateUrl: './app/Condicion.add.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class CondicionsAddComponent implements OnInit {
    Condicion: Condicion;
  
    selectedCondicion: Condicion;
    reglas: Regla[];
    
    operadorcomporacions: OperadorComparacion[];
    operadorlogico1: Logico[];
    operadorlogico2: Logico[];
    sub: any;
    constructor(
        private ReglaService: ReglaService,
        private CondicionService: CondicionService,
        private route: ActivatedRoute,

        private operadorcomporacionService: OperadorComparacionService,
        private LogicoService: LogicoService
    ) { }

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
    ngOnInit(): void {

       
        this.getoperadorcomporacions();
        this.getoperadorlogicos1();
        this.getoperadorlogicos2();
        this.getoperadorreglas();
    }
    addCondicion(reglaId: number, operadorco: number, operadorl1: number, operadorl2: number, t1: string, t2: string) {
        console.log("Valor de la regla", reglaId);
        this.CondicionService.addCondicion(reglaId, operadorco, operadorl1, operadorl2, t1, t2);

    }
  
    goBack() {
        window.history.back();
    }

}



