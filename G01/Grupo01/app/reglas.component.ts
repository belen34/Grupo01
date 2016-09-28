import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Regla } from './regla';
import { ReglaService } from './regla.service';

@Component({
    selector: 'my-reglas',
    templateUrl: './app/reglas.component.html',
    styleUrls: ['./app/logicos.component.css'],

})

export class ReglasComponent implements OnInit {
    regla: Regla;
    reglas: Regla[];
    selectedregla: Regla;
    constructor(private router: Router,
        private reglaService: ReglaService) { }
    getreglas(): void {
        this.reglaService.getReglas()
            .then(
            reglas => this.reglas = reglas);
    }
    ngOnInit(): void {
        this.getreglas();
    }
    onSelect(regla: Regla): void {
        this.selectedregla = regla;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedregla.reglaId])
    }
    delete(regla: Regla): void {
        this.router.navigate(['/delete', regla.reglaId]);
    }
}