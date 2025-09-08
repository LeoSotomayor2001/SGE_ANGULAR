import { AuthService } from './../../../auth/services/Auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-repre',
  standalone: false,
  templateUrl: './sidebar-repre.component.html',
})
export class SidebarRepreComponent {
   expanded: boolean = false;
  onloading: boolean = false;
  representante: any;

  constructor(private router: Router, private authService: AuthService) {
    
  }
   ngOnInit() {
    this.onloading=true
    this.authService.checkStatus().subscribe((isAuthenticated) => {
      // El código aquí se ejecuta solo después de que la respuesta de la API ha llegado.
      if (isAuthenticated) {
        // Ahora es seguro acceder al representante
        this.representante = this.authService.representante;
        this.onloading=false
      } else {
        console.log('El usuario no está autenticado.');
      }
    });
  }

  cerrarSesion() {
    this.onloading = true;
    // Lógica para cerrar sesión
    setTimeout(() => {
      this.onloading = false;
      this.router.navigate(['/login']);
    }, 1000);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
