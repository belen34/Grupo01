import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Condicion } from './Condicion';

import { OperadorComparacion } from './operadorcomparacion';
import { CondicionService } from './Condicion.service';

import { OperadorComparacionService } from './operadorcomparacion.service';

@Component({
    selector: 'my-Condicion-detail',
    templateUrl: './app/Condicion.add.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class CondicionsAddComponent implements OnInit {
    Condicion: Condicion;
    Condicions: Condicion[];
    selectedCondicion: Condicion;

    operadors: OperadorComparacion[];
    sub: any;
    constructor(
        private CondicionService: CondicionService,
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
    addCondicion(operadorId: number, t1: string, t2: string) {

        this.CondicionService.addCondicion(operadorId, t1, t2);

    }
  
    goBack() {
        window.history.back();
    }

}



