import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

//import { Recipe } from './recipe';
import { Regla } from './regla';
//import { Farmaco } from './farmaco';
//import { RecipeService } from './recipe.service';
import { ReglaService } from './regla.service';
//import { FarmacoService } from './farmaco.service';

@Component({
    selector: 'my-regla-detail',
    templateUrl: './app/regla.add.component.html',
    styleUrls: ['./app/logicos.component.css'],

})
export class ReglasAddComponent implements OnInit {
   
    sub: any;
    constructor(private ReglaService: ReglaService,     
        private route: ActivatedRoute
    ) { }
   
    ngOnInit(): void {
        
    }
    addRegla(name: string) {
       
        this.ReglaService.addRegla(name);
    }
  
    goBack() {
        window.history.back();
    }

}



