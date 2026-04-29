import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Repositorio } from './repositorio';


@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

 private repositorioUrl: string = environment.repositorioUrl;

constructor(private http: HttpClient) { }

getRepositorios(): Observable<Repositorio[]> {

 return this.http.get<Repositorio[]>(this.repositorioUrl);
}


}
