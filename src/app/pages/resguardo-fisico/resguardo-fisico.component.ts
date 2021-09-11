import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resguardo-fisico',
  templateUrl: './resguardo-fisico.component.html',
  styleUrls: ['./resguardo-fisico.component.scss']
})
export class ResguardoFisicoComponent implements OnInit {

 
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
