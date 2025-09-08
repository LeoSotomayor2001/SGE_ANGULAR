import { Component, OnDestroy } from '@angular/core';
import { RepresentanteService } from '../../services/representante.service';
import { AuthService } from '../../../auth/services/Auth.service';
import { EstudianteRepresentante } from '../../interfaces/EstudianteRepresentate.interface';
import { Representante } from '../../interfaces/Representante.interface';
import { finalize, take, filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
})
export class InicioComponent  {
  public isLoading: boolean = true;
  estudiantes: EstudianteRepresentante[] = [];
  private id: Representante['id'] = 0;

  constructor(
    private representanteService: RepresentanteService,
    private authService: AuthService
  ) {
    // Corrige el flujo: espera un valor no nulo antes de tomarlo
    this.authService.representante$.pipe(
      filter(representante => !!representante), // 1. Espera a que el valor no sea null
      take(1) // 2. Toma el primer valor válido y se desuscribe
    ).subscribe(
      (representante) => {
        this.id = representante.id;
        this.getEstudiantes();
      }
    );
  }
  
  private getEstudiantes() {
    this.isLoading = true;
    this.representanteService.getEstudiantes(this.id).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((resp) => {
      if (resp) {
        this.estudiantes = resp.estudiantes;
      }
    });
  }
}