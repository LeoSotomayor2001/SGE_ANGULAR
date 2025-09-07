import { Component } from '@angular/core';
import { RepresentanteService } from '../../services/representante.service';
import { AuthService } from '../../../auth/services/Auth.service';
import { EstudianteRepresentante } from '../../interfaces/EstudianteRepresentate.interface';
import { Representante } from '../../interfaces/Representante.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  estudiantes: EstudianteRepresentante[] = [];
  private id: Representante['id'] = 0;
  private subscription: Subscription;

  constructor(
    private representanteService: RepresentanteService,
    private authService: AuthService
  ) {
    this.subscription = this.authService.representante$.subscribe(
      (representante) => {
        if (representante) {
          this.id = representante.id;
          this.getEstudiantes();
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getEstudiantes() {
    this.representanteService.getEstudiantes(this.id).subscribe((resp) => {
      if (resp) {
        this.estudiantes = resp.estudiantes;
      }
    });
  }
}
