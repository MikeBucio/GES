import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ios',
  templateUrl: './ios.component.html',
  styleUrls: ['./ios.component.scss']
})
export class IosComponent implements OnInit {

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
