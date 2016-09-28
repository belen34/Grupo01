import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Regla } from './regla';

import { ReglaService } from './regla.service';

@Component({
    selector: 'my-regla-detail',
    templateUrl: './app/regla.detail.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class ReglasDetailComponent implements OnInit {
    regla: Regla;
    reglas: Regla[];
   
    sub: any;
    constructor(
        private route: ActivatedRoute,
        private ReglaService: ReglaService
       ) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.ReglaService.getRegla(id)
                .then(regla => this.regla = regla);
        });
      
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
    save(): void {
        this.ReglaService.updateRegla(this.regla)
            .then(this.goBack);
    }
}