import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import {
  RepresentanteResource,
  RepresentanteResponse,
} from '../../representante/interfaces/Representante.interface';

interface AuthResponse {
  user?: any;
  profesor?: any;
  representante?: RepresentanteResource;
  token?: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly url = environment.API_URL;
  private _authStatus = new BehaviorSubject<boolean>(false);
  public authStatus$ = this._authStatus.asObservable();
  private _user: string | null = '';
  private _token: string | null = localStorage.getItem('token');
  private _representante: RepresentanteResource | null = null;
  private _profesor: string | null = '';
  get user() {
    return this._user;
  }
  get token() {
    return this._token;
  }
  get profesor() {
    return this._profesor;
  }
  get representante() {
    return this._representante;
  }
  get representante$(): Observable<RepresentanteResource | null> {
    return this.authStatus$.pipe(
      map((isAuthenticated) => (isAuthenticated ? this._representante : null))
    );
  }
  constructor(private http: HttpClient) {}

  login(email: string, password: string, user_type: string): Observable<any> {
    let body = { email, password, user_type };
    return this.http.post(`${this.url}/login`, body).pipe(
      tap((resp) => {
        this.handleAuthSuccess(resp);
        this._authStatus.next(true); 
      }),
      map((resp) => resp)
    );
  }

  register(
    email: string,
    password: string,
    name: string,
    apellido: string,
    telefono: string,
    direccion: string,
    cedula: string,
    password_confirmation: string,
    ciudad: string
  ) {
    let body = {
      email,
      password,
      name,
      apellido,
      telefono,
      direccion,
      cedula,
      password_confirmation,
      ciudad,
    };

    return this.http.post(`${this.url}/register/representante`, body);
  }

  checkStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this._authStatus.next(false);
      return of(false);
    }

    return this.http.get<AuthResponse>(`${this.url}/auth/user`).pipe(
      tap((resp: any) => {
        this.handleAuthSuccess(resp);
        this._authStatus.next(true);
      }),
      map(() => true),
      catchError((error: HttpErrorResponse) => {
        console.error('La verificación de autenticación falló:', error);
        this.handleAuthFailure();
        this._authStatus.next(false);
        return of(false);
      })
    );
  }

  //TODO: CREAR UNA INTERFACE DE AUTHRESPONSE
  private handleAuthSuccess(resp: any) {
    if (resp.user) this._user = resp.user;
    if (resp.profesor) this._profesor = resp.profesor;
    if (resp.representante) this._representante = resp.representante;
    if (resp.token) {
      this._token = resp.token;
      localStorage.setItem('token', resp.token);
    }
    return true;
  }

  private handleAuthFailure(): void {
    this._user = null;
    this._profesor = null;
    this._representante = null;
    this._token = '';
  }

  logout(): void {
    this.handleAuthFailure();
    localStorage.removeItem('token');
  }
}
