﻿﻿import { Condicion } from './Condicion';

import { OperadorComparacion } from './operadorcomparacion';

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class CondicionService {
    //maximo: number = 4;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers2 = new Headers({ 'Accept': 'application/json' });
    private CondicionsUrl: string = '/api/Condicions';  // URL to web api

    constructor(private http: Http) { }

    getCondicions() {
        return this.http.get(this.CondicionsUrl, { headers: this.headers2 })
            .toPromise()
            .then(response => response.json() as Condicion[])
            .catch(this.handleError);
    }
    getCondicion(CondicionId: number) {
        //return this.getCondicions()
        //    .then(Condicions => Condicions.find(Condicion => Condicion.condicionId === CondicionId))
        return this.http.get(this.CondicionsUrl + "/" + CondicionId, { headers: this.headers2 })
            .toPromise()
            .then(response => response.json() as Condicion)
            .catch(this.handleError);
    }
    delete(index: number) {
        let url = `${this.CondicionsUrl}/${index}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    addCondicion(reglaId: number, operadorId: number, operadorl1Id: number, operadol2rId: number, t1: string, t2: string): Promise<Condicion> {
        console.log("Valor de la regla en el service", reglaId);
        var p = new Condicion(0, reglaId, operadorId, operadorl1Id, operadol2rId, t1, t2);
        return this.http
            .post(this.CondicionsUrl, JSON.stringify(p), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    updateCondicion(Condicion: Condicion): Promise<Condicion> {

        const url = `${this.CondicionsUrl}/${Condicion.condicionId}`;
        return this.http
            .put(url, JSON.stringify(Condicion), { headers: this.headers })
            .toPromise()
            .then(() => Condicion)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    }
}

