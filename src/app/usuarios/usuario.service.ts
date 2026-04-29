import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioUrl: string = environment.usuarioUrl;



constructor(private http: HttpClient) { }

getUsuarios(): Observable<Usuario[]> {
return this.http.get<Usuario[]>(this.usuarioUrl);
}


}
