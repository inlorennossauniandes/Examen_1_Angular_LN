import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    UsuarioListComponent
  ],
  exports: [UsuarioListComponent]
})
export class UsuariosModule { }
