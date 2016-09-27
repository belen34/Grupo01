import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Logico } from './logico';
import { LogicoService } from './logico.service';

@Component({
    selector: 'my-logico-delete',
    templateUrl: './app/logico.delete.component.html',
    styleUrls: ['./app/logicos.component.css'],
})

export class LogicosDeleteComponent implements OnInit, OnDestroy {
    logico: Logico;
    sub: any;
    constructor(private logicoService: LogicoService,
        private route: ActivatedRoute) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.logicoService.delete(id)
                .then(logico => this.logico = logico);
        });

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
}