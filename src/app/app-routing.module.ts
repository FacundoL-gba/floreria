import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './page/equipos/equipos.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { ServiciosComponent } from './page/servicios/servicios.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'servicio', component:ServiciosComponent},
  {path:'equipo', component:EquiposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
