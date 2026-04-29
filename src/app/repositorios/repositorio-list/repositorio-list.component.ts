import { Component, OnInit } from '@angular/core';
import { RepositorioService } from '../repositorio.service';
import { Repositorio } from '../repositorio'; 

@Component({
  selector: 'app-repositorio-list',
  templateUrl: './repositorio-list.component.html',
  styleUrls: ['./repositorio-list.component.css'],
  standalone: false
})
export class RespositorioListComponent implements OnInit {

  constructor(private repositorioService: RepositorioService) { }

  repositorios: Array<Repositorio> = [];


  getRepositorios(): void {
    this.repositorioService.getRepositorios()
      .subscribe(repositorios => this.repositorios = repositorios);
  }

  ngOnInit() {
    this.getRepositorios(); 
  }

}
