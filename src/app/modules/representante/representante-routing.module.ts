import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentanteComponent } from './layout/representante/representante.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotasEstudiantesComponent } from './pages/notas-estudiantes/notas-estudiantes.component';
import { RegistroEstudiantesComponent } from './pages/registro-estudiantes/registro-estudiantes.component';
import { EstudiantesInscritosComponent } from './pages/estudiantes-inscritos/estudiantes-inscritos.component';

const routes: Routes = [
  {
    path: '',
    component: RepresentanteComponent,
    children: [
      {
        path: 'inicio',
        title: 'Inicio',
        component: InicioComponent,
      },
      {
        path: 'perfil',
        title: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'notas-estudiantes',
        title: 'Notas de Estudiantes',
        component: NotasEstudiantesComponent,
      },
      {
        path: 'registro-estudiantes',
        title: 'Regitrar Estudiante',
        component: RegistroEstudiantesComponent,
      },
      {
        path: 'estudiantes-inscritos',
        title: 'Estudiantes inscritos',
        component: EstudiantesInscritosComponent,
      },
      {
        path: '**',
        redirectTo: 'inicio',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepresentanteRoutingModule {}
