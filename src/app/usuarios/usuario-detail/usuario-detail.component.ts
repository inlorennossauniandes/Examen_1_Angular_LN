import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css'],
  standalone: false
})
export class UsuarioDetailComponent implements OnInit {

  @Input() usuario!: Usuario;
  constructor() { }

  ngOnInit() {
  }

}
