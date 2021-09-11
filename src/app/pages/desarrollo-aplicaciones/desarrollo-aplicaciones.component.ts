import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desarrollo-aplicaciones',
  templateUrl: './desarrollo-aplicaciones.component.html',
  styleUrls: ['./desarrollo-aplicaciones.component.scss']
})
export class DesarrolloAplicacionesComponent implements OnInit {

  
  seccion:string
  constructor( private actRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.seccion = this.actRoute.snapshot.paramMap.get('seccion');
    this.enforcarSeccion(this.seccion);  
  }

  enforcarSeccion(sec){
  
    if(sec === "home") {document.getElementById("home").scrollIntoView();}
  }

}
