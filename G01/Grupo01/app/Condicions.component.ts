import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Condicion } from './Condicion';
import { CondicionService } from './Condicion.service';

@Component({
    selector: 'my-Condicions',
    templateUrl: './app/Condicions.component.html',
    styleUrls: ['./app/logicos.component.css'],

})

export class CondicionsComponent implements OnInit {
    Condicion: Condicion;
    Condicions: Condicion[];
    selectedCondicion: Condicion;
    constructor(private router: Router,
        private CondicionService: CondicionService) { }
    getCondicions(): void {
        this.CondicionService.getCondicions()
            .then(
            Condicions => this.Condicions = Condicions);
       
    }
    ngOnInit(): void {
        this.getCondicions();
       
    }
    onSelect(Condicion: Condicion): void {
        this.selectedCondicion = Condicion;
    }
    gotoDetail(Condicion: Condicion): void {
        console.log("En el detalle", Condicion.condicionId);
        this.router.navigate(['/detail', Condicion.condicionId])
    }
    delete(Condicion: Condicion): void {
        this.router.navigate(['/delete', Condicion.condicionId]);
    }
}