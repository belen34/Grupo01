﻿import { Logico } from './logico';

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class LogicoService {
    //maximo: number = 4;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private logicosUrl: string = '/api/OperardorLogicos';  // URL to web api
    private headers2 = new Headers({ 'Accept': 'application/json' });
    constructor(private http: Http) { }

    getlogicos() {

        return this.http.get(this.logicosUrl, { headers: this.headers2 })
            .toPromise()
            .then(response => response.json() as Logico[])
            .catch(this.handleError);
    }
    getLogico(logicoId: number) {

        return this.getlogicos()
            .then(logicos => logicos.find(logico => logico.logicoId === logicoId))

    }
    delete(index: number) {
        let url = `${this.logicosUrl}/${index}`;
        
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            //.then(() => null)
            .then(response => response.json() as Logico)
            .catch(this.handleError);

    }
    addLogico(name: string): Promise<Logico> {

        var p = new Logico(0, name);

        return this.http
            .post(this.logicosUrl, JSON.stringify(p), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    updateLogico(logico: Logico): Promise<Logico> {

        const url = `${this.logicosUrl}/${logico.logicoId}`;
        return this.http
            .put(url, JSON.stringify(logico), { headers: this.headers })
            .toPromise()
            .then(() => logico)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('Un error ha ocurrido', error);
        return Promise.reject(error.message || error);
    }
}

