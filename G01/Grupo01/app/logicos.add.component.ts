import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Logico } from './logico';
import { LogicoService } from './logico.service';


@Component({
    selector: 'my-logico-detail',
    templateUrl: './app/logico.add.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class LogicosAddComponent implements OnInit {

    sub: any;
    constructor(private LogicoService: LogicoService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

    }
    addOperador(name: string) {

        this.LogicoService.addLogico(name);
    }

    goBack() {
        window.history.back();
    }

}



