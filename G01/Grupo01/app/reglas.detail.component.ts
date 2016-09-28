import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Regla } from './regla';
import { ReglaService } from './regla.service';

import { OperadorComparacion } from './operadorcomparacion';

import { OperadorComparacionService } from './operadorcomparacion.service';

@Component({
    selector: 'my-regla-detail',
    templateUrl: './app/regla.detail.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class ReglasDetailComponent implements OnInit {
    regla: Regla;
   
    operadorcomporacions: OperadorComparacion[];
    sub: any;
    constructor(private reglaService: ReglaService,
        private route: ActivatedRoute,
       
        private operadorcomporacionService: OperadorComparacionService) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.reglaService.getRegla(id)
                .then(regla => this.regla = regla);
        });
      
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
        this.reglaService.updateregla(this.regla)
            .then(this.goBack);
    }
}