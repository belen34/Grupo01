import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Logico } from './logico';
import { LogicoService } from './logico.service';

@Component({
    selector: 'my-logicos',
    templateUrl: './app/logicos.component.html',
    styleUrls: ['./app/logicos.component.css'],

})

export class LogicosComponent implements OnInit {
    logico: Logico;
    logicos: Logico[];
    selectedLogico: Logico;
    constructor(private router: Router,
        private logicoService: LogicoService) { }
    getLogicos(): void {
        this.logicoService.getlogicos()
            .then(
            logicos => this.logicos = logicos);
    }
    ngOnInit(): void {
        this.getLogicos();
    }
    onSelect(logico: Logico): void {
        this.selectedLogico = logico;
      
    }
    gotoDetail(): void {
        
        this.router.navigate(['/detaillogico', this.selectedLogico.operadorlogicoId])
    }
    delete(logico: Logico): void {
     
        this.router.navigate(['/deletelogico', logico.operadorlogicoId]);
    }
}