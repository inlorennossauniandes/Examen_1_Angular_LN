import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuariosRoutingModule } from './usuario.routing';


@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    UsuarioListComponent,
    UsuarioDetailComponent
  ],
  exports: [UsuarioListComponent]
})
export class UsuariosModule { }
