import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespositorioListComponent } from './repositorio-list/repositorio-list.component';
import { RepositorioDetailComponent } from './repositorio-detail/repositorio-detail.component';

const routes: Routes = [
  { path: 'repositorios', component: RespositorioListComponent },
  { path: 'repositorios/:id', component: RepositorioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriosRoutingModule { }