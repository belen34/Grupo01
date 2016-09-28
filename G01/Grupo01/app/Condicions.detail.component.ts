import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Condicion } from './Condicion';
import { CondicionService } from './Condicion.service';

import { OperadorComparacion } from './operadorcomparacion';

import { OperadorComparacionService } from './operadorcomparacion.service';

@Component({
    selector: 'my-Condicion-detail',
    templateUrl: './app/Condicion.detail.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class CondicionsDetailComponent implements OnInit {
    Condicion: Condicion;
   
    operadorcomporacions: OperadorComparacion[];
    sub: any;
    constructor(private CondicionService: CondicionService,
        private route: ActivatedRoute,
       
        private operadorcomporacionService: OperadorComparacionService) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.CondicionService.getCondicion(id)
                .then(Condicion => this.Condicion = Condicion);
        });
        console.log("Condicion en el detail", this.Condicion);
        this.getoperadorcomporacions();
    }

    getoperadorcomporacions(): void {
        this.operadorcomporacionService.getoperadorcomparacions().then(
            operadorcomporacions => this.operadorcomporacions
                = operadorcomporacions);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
    save(): void {
        this.CondicionService.updateCondicion(this.Condicion)
            .then(this.goBack);
    }
}