import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespositorioListComponent } from './repositorio-list/repositorio-list.component';
import { RepositorioDetailComponent } from './repositorio-detail/repositorio-detail.component';
import { RepositoriosRoutingModule } from './repositorio.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RepositoriosRoutingModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    RespositorioListComponent,
    RepositorioDetailComponent
  ],
  declarations: [
    RespositorioListComponent,
    RepositorioDetailComponent
  ]
})
export class RepositoriosModule { }
