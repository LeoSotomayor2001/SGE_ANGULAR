import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentanteRoutingModule } from './representante-routing.module';
import { RepresentanteComponent } from './layout/representante/representante.component';
import { SidebarRepreComponent } from './components/sidebar-repre/sidebar-repre.component';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EstudiantesInscritosComponent } from './pages/estudiantes-inscritos/estudiantes-inscritos.component';
import { RegistroEstudiantesComponent } from './pages/registro-estudiantes/registro-estudiantes.component';
import { NotasEstudiantesComponent } from './pages/notas-estudiantes/notas-estudiantes.component';


@NgModule({
  declarations: [
    RepresentanteComponent,
    SidebarRepreComponent,
    InicioComponent,
    PerfilComponent,
    EstudiantesInscritosComponent,
    RegistroEstudiantesComponent,
    NotasEstudiantesComponent
  ],
  imports: [
    CommonModule,
    RepresentanteRoutingModule,
    SharedModule
  ]
})
export class RepresentanteModule { }
