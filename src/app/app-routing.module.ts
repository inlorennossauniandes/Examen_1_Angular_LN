import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespositorioListComponent } from './repositorios/repositorio-list/repositorio-list.component';
import { RepositorioDetailComponent } from './repositorios/repositorio-detail/repositorio-detail.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'repositorios', component: RespositorioListComponent },
  { path: 'repositorios/:id', component: RepositorioDetailComponent },
   { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
