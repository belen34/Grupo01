
import { OperadorComparacion } from './operadorcomparacion';

export class Condicion {
    CondicionId: number;
    operadorcomparacionId: number;
    texto1: string;
    texto2: string;
    OperadorComparacionObj: OperadorComparacion;
    constructor(CondicionId: number, operadorcomparacionId: number, texto1: string, texto2: string) {
        this.CondicionId = CondicionId;
        this.operadorcomparacionId = operadorcomparacionId;
        this.texto1 = texto1;
        this.texto2 = texto2;
    }
}