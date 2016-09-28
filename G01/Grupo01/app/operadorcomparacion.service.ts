﻿import { OperadorComparacion } from './operadorcomparacion';

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class OperadorComparacionService {
    //maximo: number = 4;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers2 = new Headers({ 'Accept': 'application/json' });
    private operadorcomparacionssUrl: string = '/api/operadorcomparacions';  // URL to web api
    operadorcomparacion: OperadorComparacion;
    constructor(private http: Http) { }

    getoperadorcomparacions() {

        return this.http.get(this.operadorcomparacionssUrl, { headers: this.headers2 })
            .toPromise()
            .then(response => response.json() as OperadorComparacion[])
            .catch(this.handleError);
    }
    getoperadorcomparacion(operadorcomparacionId: number) {

        return this.getoperadorcomparacions()
            .then(operadorcomparacions => operadorcomparacions.find(operadorcomparacion => operadorcomparacion.operadorComparacionId === operadorcomparacionId))

    }
  
    private handleError(error: any): Promise<any> {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    }
}

