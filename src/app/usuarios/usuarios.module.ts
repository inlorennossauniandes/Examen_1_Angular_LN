import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuariosComponent],
  exports: [UsuariosComponent]
})
export class UsuariosModule { }
