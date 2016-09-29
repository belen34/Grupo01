import { Component } from '@angular/core';
//import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
   <a id= "dashboard" [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
   <a id= "logicos" [routerLink]="['/logicos']" routerLinkActive="active">Operadores logicos</a>
   <a id= "condiciones" [routerLink]="['/condiciones']" routerLinkActive="active">condiciones</a>
   <a id= "reglas" [routerLink]="['/reglas']" routerLinkActive="active">reglas</a>
  </nav>
  <router-outlet></router-outlet>
  `,
    styleUrls: ['./app/logicos.component.css'],
   
})
export class AppComponent {
    title = 'Motor de reglas';
}