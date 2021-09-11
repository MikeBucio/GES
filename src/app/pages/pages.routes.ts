import { RouterModule ,Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PlataformaDocumentalComponent } from './plataforma-documental/plataforma-documental.component';
import { ResguardoFisicoComponent } from './resguardo-fisico/resguardo-fisico.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { IosComponent } from './ios/ios.component';
import { AndroidComponent } from './android/android.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';
import { HomeComponent } from './home/home.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { DesarrolloAplicacionesComponent } from './desarrollo-aplicaciones/desarrollo-aplicaciones.component';
import { BiComponent } from './bi/bi.component';

const pagesRoutes: Routes = [
          {
            path: '', component: NavbarComponent,
         children : [
            { path: 'quienes-somos', component: QuienesSomosComponent },
            { path: 'quienes-somos/:seccion', component: QuienesSomosComponent },
            { path: 'contactos/:seccion', component: ContactosComponent },
            { path: 'contactos/:contactanos/:seccion', component: ContactosComponent },
            { path: 'servicios/:seccion', component: ServiciosComponent },
            { path: 'nosotros/:seccion', component: NosotrosComponent },
            { path: 'plataforma-documental/:seccion', component: PlataformaDocumentalComponent },
            { path: 'plataforma-documental/:seccion', component: PlataformaDocumentalComponent },
            { path: 'resguardo-fisico/:seccion', component: ResguardoFisicoComponent },
            { path: 'consultoria/:seccion', component: ConsultoriaComponent },
            { path: 'soporte-Tecnico/:seccion', component: SoporteTecnicoComponent },
            { path: 'ios-project/:seccion', component: IosComponent  },
            { path: 'android-project/:seccion', component: AndroidComponent  },
            { path: 'content-management/:seccion', component: ContentManagementComponent  },
            { path: 'desarrollo-de-aplicaciones/:seccion', component: DesarrolloAplicacionesComponent  },
            { path: 'BI/:seccion', component: BiComponent  },
            { path: 'contactos', component: ContactosComponent },
            
            { path: 'servicios', component: ServiciosComponent },
            { path: 'nosotros', component: NosotrosComponent },
            { path: 'plataforma-documental', component: PlataformaDocumentalComponent },
            { path: 'plataforma-documental', component: PlataformaDocumentalComponent },
            { path: 'resguardo-fisico', component: ResguardoFisicoComponent },
            { path: 'consultoria', component: ConsultoriaComponent },
            { path: 'soporte-Tecnico', component: SoporteTecnicoComponent },
            { path: 'ios-project', component: IosComponent  },
            { path: 'android-project', component: AndroidComponent  },
            { path: 'content-management', component: ContentManagementComponent  },
            { path: 'desarrollo-de-aplicaciones', component: DesarrolloAplicacionesComponent  },
            { path: 'BI', component: BiComponent  },
            { path: '', component: QuienesSomosComponent  },
            { path: '**', component: NotFoundComponent }
            
         ]
      } ,
      { path: '**', component: NotFoundComponent }
]
export const pages_routes = RouterModule.forChild(pagesRoutes); 