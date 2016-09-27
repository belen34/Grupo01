import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Logico } from './logico';
import { LogicoService } from './logico.service';

@Component({
    selector: 'my-logico-detail',
    templateUrl: './app/logico.detail.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class LogicosDetailComponent implements OnInit {
    logico: Logico;
    logicos: Logico[];

    sub: any;
    constructor(
        private route: ActivatedRoute,
        private LogicoService: LogicoService
    ) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.LogicoService.getLogico(id)
                .then(logico => this.logico = logico);
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
    save(): void {
        this.LogicoService.updateLogico(this.logico)
            .then(this.goBack);
    }
}