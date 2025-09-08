import { Component, Input } from '@angular/core';
import { Estudiante } from '../../../shared/interfaces/Estudiante.interface';
import { EstudianteRepresentante } from '../../interfaces/EstudianteRepresentate.interface';

@Component({
  selector: 'estudiante-card',
  standalone: false,
  templateUrl: './estudiante-card.component.html',
  styleUrl: './estudiante-card.component.css'
})
export class EstudianteCardComponent {
 @Input()  estudiante! : EstudianteRepresentante
}
