import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly url = environment.API_URL;
  private _user = '';
  private _token = '';
  private _representante=''
  private _profesor=''
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
  constructor(private http: HttpClient) {}

  login(email: string, password: string, user_type: string): Observable<any> {
    let body = { email, password, user_type };
    return this.http
      .post(`${this.url}/login`, body)
      .pipe(map((resp) => this.handleAuthSuccess(resp)));
  }

  register(email:string, password:string, name:string,apellido:string,telefono:string,direccion:string,cedula:string,password_confirmation:string,ciudad:string ){
    let body={email, password, name,apellido,telefono,direccion,cedula,password_confirmation,ciudad }

    return this.http.post(`${this.url}/register/representante`,body)
  }

  //TODO: CREAR UNA INTERFACE DE AUTHRESPONSE
  private handleAuthSuccess(resp: any) {
    if(resp.user) this._user = resp.user;
    if(resp.profesor) this._profesor = resp.profesor;
    if(resp.representante) this._representante = resp.representante;
    this._token = resp.token;
    localStorage.setItem('token', resp.token);
    return true;
  }
}
