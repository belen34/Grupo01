import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Regla } from './regla';
import { ReglaService } from './regla.service';

@Component({
    selector: 'my-regla-delete',
    templateUrl: './app/regla.delete.component.html',
    styleUrls: ['./app/logicos.component.css'],
})

export class ReglasDeleteComponent implements OnInit, OnDestroy {
    regla: Regla;
    sub: any;
    constructor(private reglaService: ReglaService,
        private route: ActivatedRoute) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.reglaService.delete(id);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
}