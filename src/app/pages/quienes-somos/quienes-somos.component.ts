import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {

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
