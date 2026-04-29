/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CommonModule } from '@angular/common';

import { UsuarioDetailComponent } from './usuario-detail.component';
import { Usuario } from '../usuario';

describe('UsuarioDetailComponent', () => {

  let component: UsuarioDetailComponent;
  let fixture: ComponentFixture<UsuarioDetailComponent>;
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
      Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () =>
        faker.number.int({ min: 100, max: 200 })
      )
    );
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioDetailComponent],
      imports: [CommonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetailComponent);
    component = fixture.componentInstance;
    component.usuario = generateUsuario();
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  // Prueba 1: El componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Muestra el nombre del usuario
  it('should display the usuario name', () => {
    const name = debug.query(By.css('.detail-header-info h1')).nativeElement.textContent;
    expect(name).toContain(component.usuario.name);
  });

  // Prueba 3: Muestra el username con @
  it('should display the username with @ prefix', () => {
    const username = debug.query(By.css('.detail-username')).nativeElement.textContent;
    expect(username).toContain('@' + component.usuario.username);
  });

  // Prueba 4: Muestra el avatar con src correcto
  it('should display avatar with correct src', () => {
    const img = debug.query(By.css('.detail-avatar')).nativeElement;
    expect(img.getAttribute('src')).toBe(component.usuario.avatarUrl);
  });

  // Prueba 5: Muestra el rol del usuario
  it('should display the usuario role', () => {
    const role = debug.query(By.css('.role-badge')).nativeElement.textContent;
    expect(role).toContain(component.usuario.role);
  });

  // Prueba 6: Muestra el email del usuario
  it('should display the usuario email', () => {
    const values = debug.queryAll(By.css('.detail-value'));
    const texts = values.map(v => v.nativeElement.textContent);
    expect(texts.some(t => t.includes(component.usuario.email))).toBeTrue();
  });

  // Prueba 7: Muestra la ubicación del usuario
  it('should display the usuario location', () => {
    const values = debug.queryAll(By.css('.detail-value'));
    const texts = values.map(v => v.nativeElement.textContent);
    expect(texts.some(t => t.includes(component.usuario.location))).toBeTrue();
  });



  // Prueba 9: Existe el wrapper del detalle
  it('should render the detail wrapper', () => {
    const wrapper = debug.query(By.css('.detail-wrapper'));
    expect(wrapper).toBeTruthy();
  });

  // Prueba 10: Existe el header del detalle
  it('should render the detail header', () => {
    const header = debug.query(By.css('.detail-header'));
    expect(header).toBeTruthy();
  });

  // Prueba 11: Existe el body del detalle
  it('should render the detail body', () => {
    const body = debug.query(By.css('.detail-body'));
    expect(body).toBeTruthy();
  });

  // Prueba 12: Muestra 3 detail-items
  it('should display 3 detail items', () => {
    const items = debug.queryAll(By.css('.detail-item'));
    expect(items.length).toBe(3);
  });

  // Prueba 13: Existe el detail-card
  it('should render the detail card', () => {
    const card = debug.query(By.css('.detail-card'));
    expect(card).toBeTruthy();
  });

  // Prueba 14: Muestra los repo chips
  it('should display repo chips for each repoId', () => {
    const chips = debug.queryAll(By.css('.repo-chip'));
    expect(chips.length).toBe(component.usuario.repoIds.length);
  });

  // Prueba 15: Cambiar usuario actualiza el nombre
  it('should update name when usuario changes', () => {
    const newUsuario = generateUsuario();
    component.usuario = newUsuario;
    fixture.detectChanges();
    const name = debug.query(By.css('.detail-header-info h1')).nativeElement.textContent;
    expect(name).toContain(newUsuario.name);
  });
});