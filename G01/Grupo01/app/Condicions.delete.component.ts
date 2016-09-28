import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Condicion } from './Condicion';
import { CondicionService } from './Condicion.service';

@Component({
    selector: 'my-Condicion-delete',
    templateUrl: './app/Condicion.delete.component.html',
    styleUrls: ['./app/logicos.component.css'],
})

export class CondicionsDeleteComponent implements OnInit, OnDestroy {
    Condicion: Condicion;
    sub: any;
    constructor(private CondicionService: CondicionService,
        private route: ActivatedRoute) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.CondicionService.delete(id);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
}