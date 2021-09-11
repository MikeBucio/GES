import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plataforma-documental',
  templateUrl: './plataforma-documental.component.html',
  styleUrls: ['./plataforma-documental.component.scss']
})
export class PlataformaDocumentalComponent implements OnInit {

  seccion:string
  constructor( private actRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.seccion = this.actRoute.snapshot.paramMap.get('seccion');
    this.enforcarSeccion(this.seccion);  
  }

  enforcarSeccion(sec){
    if(sec === "home") {document.getElementById("home").scrollIntoView();}
    if(sec === "digDocs") {document.getElementById("digDocs").scrollIntoView();}
    if(sec === "Trabajo-Eficiente") { document.getElementById("Trabajo-Eficiente").scrollIntoView();}
    if(sec === "seguridad-Info") { document.getElementById("seguridad-Info").scrollIntoView();}
    if(sec === "compartir-Docs") {document.getElementById("compartir-Docs").scrollIntoView();}
    if(sec === "version-Control") { document.getElementById("version-Control").scrollIntoView();}
    

  }

}
