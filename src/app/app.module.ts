import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriosModule } from './repositorios/repositorios.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    RepositoriosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
