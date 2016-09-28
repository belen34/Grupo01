﻿
import { OperadorComparacion } from './operadorcomparacion';
import { Logico } from './logico';
export class Condicion {
    condicionId: number;
    operadorcomparacionId: number;
    operadorLogico1Id: number;
    operadorLogico2Id: number;
    texto1: string;
    texto2: string;


    OperadorComparacionObj: OperadorComparacion; 
    OperadorLogicoObj1: Logico;
    OperadorLogicoObj2: Logico;

    constructor(condicionId: number, operadorcomparacionId: number, operadorLogico1Id: number, operadorLogico2Id:number,  texto1: string, texto2: string) {
        this.condicionId = condicionId;
        this.operadorcomparacionId = operadorcomparacionId;
        this.operadorLogico1Id = operadorLogico1Id;
        this.operadorLogico2Id = operadorLogico2Id;
        this.texto1 = texto1;
        this.texto2 = texto2;
    }
}