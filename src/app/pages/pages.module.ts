//modulos
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//directive
import { OnlyNumber } from '../directives/onlyNumber.directive';

//rutas
import { pages_routes } from './pages.routes';

//componentes
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { PlataformaDocumentalComponent } from './plataforma-documental/plataforma-documental.component';
import { ResguardoFisicoComponent } from './resguardo-fisico/resguardo-fisico.component';
import { IosComponent } from './ios/ios.component';
import { AndroidComponent } from './android/android.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';
import { HomeComponent } from './home/home.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { DesarrolloAplicacionesComponent } from './desarrollo-aplicaciones/desarrollo-aplicaciones.component';
import { BiComponent } from './bi/bi.component';
import { CommonModule } from '@angular/common';



@NgModule({ 
  imports :[
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    pages_routes,
    AppRoutingModule,
    CommonModule    
  ],
  declarations: [ 
    OnlyNumber,
    ServiciosComponent,
    ContactosComponent,
    QuienesSomosComponent,
    NosotrosComponent,
    PlataformaDocumentalComponent,
    ResguardoFisicoComponent,
    ConsultoriaComponent,
    IosComponent,
    AndroidComponent,
    SoporteTecnicoComponent,
    HomeComponent,
    ContentManagementComponent,
    DesarrolloAplicacionesComponent,
    BiComponent,
], 
exports: [
    ServiciosComponent,
    ContactosComponent,
    QuienesSomosComponent,
    NosotrosComponent,
    PlataformaDocumentalComponent,
    ResguardoFisicoComponent,
    ConsultoriaComponent,
    IosComponent,
    AndroidComponent,
    SoporteTecnicoComponent,
    HomeComponent,
    ContentManagementComponent,
    DesarrolloAplicacionesComponent,
    BiComponent,
    ReactiveFormsModule
      ]
    
  })
export class PageModule { }
