import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { EquipoComponent } from './page/equipo/equipo.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { EquiposComponent } from './page/equipos/equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    EquipoComponent,
    ServiciosComponent,
    EquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
