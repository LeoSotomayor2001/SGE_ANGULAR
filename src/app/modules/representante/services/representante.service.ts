import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { map } from 'rxjs';
import { EstudianteRepresentanteResponse } from '../interfaces/EstudianteRepresentate.interface';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {
  private readonly url=environment.API_URL
  constructor(private http:HttpClient) { }


  getEstudiantes(id:number){
    return this.http.get<EstudianteRepresentanteResponse>(`${this.url}/representantes/${id}/estudiantes`).pipe(
      map((resp) => resp),
    )
  }
}
