﻿import { Component, OnInit } from '@angular/core';
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
    selectedRegla: Regla;
    imagen: string;
    constructor(private router: Router,
        private reglaService: ReglaService) { }
    getReglas(): void {
        this.reglaService.getReglas().then(
            reglas => this.reglas
                = reglas);
    }
    ngOnInit(): void {
        this.getReglas();
        
    }
    onSelect(regla: Regla): void {
        this.selectedRegla = regla;
    }
    gotoDetail(regla: Regla): void {
        
        this.router.navigate(['/detailregla', regla.reglaId])
    }
    delete(regla: Regla): void {
        this.router.navigate(['/deleteregla', regla.reglaId]);
    }
    accion(): void {
        this.imagen = "bien";
    }
}