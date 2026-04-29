import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  standalone: false
})
export class UsuarioListComponent implements OnInit {

  usuarios: Array<Usuario> = [];
  
  constructor(private usuarioService: UsuarioService) { }

getUsuarios(): void {
  this.usuarioService.getUsuarios().subscribe(usuarios => 
    this.usuarios = usuarios
);}


  ngOnInit() {
    this.getUsuarios();
  }

}
