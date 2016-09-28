import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Regla } from './regla';

import { OperadorComparacion } from './operadorcomparacion';
import { ReglaService } from './regla.service';

import { OperadorComparacionService } from './operadorcomparacion.service';

@Component({
    selector: 'my-regla-detail',
    templateUrl: './app/regla.add.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class ReglasAddComponent implements OnInit {
    regla: Regla;
    reglas: Regla[];
    selectedregla: Regla;

    operadors: OperadorComparacion[];
    sub: any;
    constructor(
        private reglaService: ReglaService,
        private route: ActivatedRoute,
        private operadorcomparacionService: OperadorComparacionService
    ) { }

    getoperadorcomparacions(): void {
        this.operadorcomparacionService.getoperadorcomparacions().then(
            operador => this.operadors
                = operador);
    }
    ngOnInit(): void {
     
        this.getoperadorcomparacions();
    }
    addregla(operadorId: number, t1: string, t2: string) {

        this.reglaService.addregla(operadorId, t1, t2);

    }
  
    goBack() {
        window.history.back();
    }

}



