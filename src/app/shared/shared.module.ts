//modulos
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//componentes
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { PagesComponent } from '../pages/pages.component';

@NgModule({
    imports: [
    RouterModule,
    CommonModule,
    ],
    declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent, 
    NotFoundComponent,
    PagesComponent  
    ],
    exports: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        PagesComponent
    ]
})
export class SharedModule {}