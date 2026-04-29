import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositorioService } from '../repositorio.service';
import { Repositorio } from '../repositorio';
import { Location } from '@angular/common';

@Component({
  selector: 'app-repositorio-detail',
  templateUrl: './repositorio-detail.component.html',
  styleUrls: ['./repositorio-detail.component.css'],
  standalone: false
})
export class RepositorioDetailComponent implements OnInit {

  repositorio!: Repositorio;

  constructor(private route: ActivatedRoute, private repositorioService: RepositorioService, 
     private location: Location
  ) { }

    ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.repositorioService.getRepositorios().subscribe(repositorios => {
      this.repositorio = repositorios.find(r => r.id === id)!;
    });
  }


  //Botón volver 
  goBack(): void {
  this.location.back();
}


}
