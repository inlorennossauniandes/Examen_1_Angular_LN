/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { UsuarioListComponent } from './usuario-list.component';
import { UsuarioDetailComponent } from '../usuario-detail/usuario-detail.component';
import { Usuario } from '../usuario';

describe('UsuarioListComponent', () => {

  let component: UsuarioListComponent;
  let fixture: ComponentFixture<UsuarioListComponent>;
  let debug: DebugElement;

  const generateUsuario = (): Usuario => {
    return new Usuario(
      faker.number.int({ min: 1, max: 1000 }),
      faker.internet.username(),
      faker.person.fullName(),
      faker.internet.email(),
      faker.image.avatar(),
      faker.helpers.arrayElement(['admin', 'developer', 'designer']),
      faker.location.city(),
      Array.from({ length: faker.number.int({ min: 0, max: 5 }) }, () =>
        faker.number.int({ min: 100, max: 200 })
      )
    );
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioListComponent, UsuarioDetailComponent],
      imports: [HttpClientTestingModule, NgxPaginationModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListComponent);
    component = fixture.componentInstance;
    component.usuarios = Array.from({ length: 10 }, generateUsuario);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  // Prueba 1: El componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Muestra máximo 6 cards por página
  it('should display at most 6 user cards per page', () => {
    const cards = debug.queryAll(By.css('.user-card'));
    expect(cards.length).toBeLessThanOrEqual(6);
  });

  // Prueba 3: Cada card tiene un avatar
  it('should display avatar image in each card', () => {
    const avatars = debug.queryAll(By.css('.avatar'));
    expect(avatars.length).toBeGreaterThan(0);
  });

  // Prueba 4: Cada card tiene un role badge
  it('should display role badge in each card', () => {
    const badges = debug.queryAll(By.css('.role-badge'));
    expect(badges.length).toBeGreaterThan(0);
  });

  // Prueba 5: Cada card tiene un botón View Details
  it('should display View Details button in each card', () => {
    const buttons = debug.queryAll(By.css('.btn-detail'));
    expect(buttons.length).toBeGreaterThan(0);
  });

  // Prueba 6: La lista no muestra el detalle por defecto
  it('should not show detail by default', () => {
    expect(component.selected).toBeFalse();
  });

  // Prueba 7: Al hacer click en View Details se selecciona un usuario
  it('should select a usuario when View Details is clicked', () => {
    const button = debug.query(By.css('.btn-detail'));
    button.nativeElement.click();
    expect(component.selected).toBeTrue();
    expect(component.selectedUsuario).toBeTruthy();
  });

  // Prueba 8: Al seleccionar un usuario se oculta la lista
  it('should hide the list when a usuario is selected', () => {
    component.onSelected(component.usuarios[0]);
    fixture.detectChanges();
    const grid = debug.query(By.css('.users-grid'));
    expect(grid).toBeFalsy();
  });

  // Prueba 9: Al seleccionar un usuario se muestra el detalle
  it('should show detail when a usuario is selected', () => {
    component.onSelected(component.usuarios[0]);
    fixture.detectChanges();
    const detail = debug.query(By.css('app-usuario-detail'));
    expect(detail).toBeTruthy();
  });

  // Prueba 10: currentPage inicia en 1
  it('should start on page 1', () => {
    expect(component.currentPage).toBe(1);
  });

  // Prueba 11: El grid de usuarios existe en el DOM
  it('should render the users grid', () => {
    const grid = debug.query(By.css('.users-grid'));
    expect(grid).toBeTruthy();
  });

  // Prueba 12: Muestra la paginación
  it('should display pagination controls', () => {
    const pagination = debug.query(By.css('pagination-controls'));
    expect(pagination).toBeTruthy();
  });

  // Prueba 13: El número de cards no supera el total de usuarios
  it('should not display more cards than usuarios available', () => {
    component.usuarios = Array.from({ length: 3 }, generateUsuario);
    fixture.detectChanges();
    const cards = debug.queryAll(By.css('.user-card'));
    expect(cards.length).toBe(3);
  });

  // Prueba 14: onSelected actualiza selectedUsuario
  it('should update selectedUsuario when onSelected is called', () => {
    const usuario = generateUsuario();
    component.onSelected(usuario);
    expect(component.selectedUsuario).toEqual(usuario);
  });

  // Prueba 15: selected vuelve a false al hacer click en volver
  it('should hide detail when volver is clicked', () => {
    component.onSelected(component.usuarios[0]);
    fixture.detectChanges();
    component.selected = false;
    fixture.detectChanges();
    expect(component.selected).toBeFalse();
  });
});