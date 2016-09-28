
import { OperadorComparacion } from './operadorcomparacion';

export class Regla {
    reglaId: number;
    operadorcomparacionId: number;
    texto1: string;
    texto2: string;
    OperadorComparacionObj: OperadorComparacion;
    constructor(reglaId: number, operadorcomparacionId: number, texto1: string, texto2: string) {
        this.reglaId = reglaId;
        this.operadorcomparacionId = operadorcomparacionId;
        this.texto1 = texto1;
        this.texto2 = texto2;
    }
}