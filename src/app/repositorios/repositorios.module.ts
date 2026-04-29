import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespositorioListComponent } from './respositorio-list/respositorio-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RespositorioListComponent
  ],
  declarations: [
    RespositorioListComponent
  ]
})
export class RepositoriosModule { }
