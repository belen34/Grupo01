﻿import { Regla } from './regla';

import { OperadorComparacion } from './operadorcomparacion';

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class ReglaService {
    //maximo: number = 4;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers2 = new Headers({ 'Accept': 'application/json' });
    private reglasUrl: string = '/api/Reglas';  // URL to web api

    constructor(private http: Http) { }

    getReglas() {
        return this.http.get(this.reglasUrl, { headers: this.headers2 })
            .toPromise()
            .then(response => response.json() as Regla[])
            .catch(this.handleError);
    }
    getRegla(reglaId: number) {
        return this.getReglas()
            .then(reglas => reglas.find(regla => regla.reglaId === reglaId))
    }
    delete(index: number) {
        let url = `${this.reglasUrl}/${index}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    addregla(operadorId: number, t1: string, t2: string): Promise<Regla> {

        var p = new Regla(0, operadorId, t1, t2);
        return this.http
            .post(this.reglasUrl, JSON.stringify(p), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    updateregla(regla: Regla): Promise<Regla> {

        const url = `${this.reglasUrl}/${regla.reglaId}`;
        return this.http
            .put(url, JSON.stringify(regla), { headers: this.headers })
            .toPromise()
            .then(() => regla)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    }
}

