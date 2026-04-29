/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RepositorioDetailComponent } from './repositorio-detail.component';
import { RepositorioService } from '../repositorio.service';
import { Repositorio } from '../repositorio';

describe('RepositorioDetailComponent', () => {

  let component: RepositorioDetailComponent;
  let fixture: ComponentFixture<RepositorioDetailComponent>;
  let debug: DebugElement;

  const generateRepositorio = (): Repositorio => {
    return new Repositorio(
      faker.number.int({ min: 100, max: 200 }),
      faker.internet.domainWord(),
      faker.lorem.sentence(),
      faker.helpers.arrayElement(['TypeScript', 'JavaScript', 'Python', 'Java', 'Go', 'Rust']),
      faker.number.int({ min: 0, max: 200 }),
      faker.date.past().toISOString().split('T')[0],
      faker.number.int({ min: 1, max: 30 })
    );
  };

  const mockRepositorio = generateRepositorio();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RepositorioDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: RepositorioService,
          useValue: { getRepositorios: () => of([mockRepositorio]) }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => String(mockRepositorio.id)
              }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  // Prueba 1: El componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Muestra el nombre del repositorio
  it('should display the repositorio name', () => {
    const name = debug.query(By.css('.detail-header-info h1')).nativeElement.textContent;
    expect(name).toContain(component.repositorio.name);
  });

  // Prueba 3: Muestra la descripción
  it('should display the repositorio description', () => {
    const desc = debug.query(By.css('.detail-description')).nativeElement.textContent;
    expect(desc).toContain(component.repositorio.description);
  });

  // Prueba 4: Muestra el language badge
  it('should display the language badge', () => {
    const badge = debug.query(By.css('.language-badge')).nativeElement.textContent;
    expect(badge).toContain(component.repositorio.language);
  });

  // Prueba 5: Muestra las stars
  it('should display the stars count', () => {
    const values = debug.queryAll(By.css('.detail-value'));
    const texts = values.map(v => v.nativeElement.textContent.trim());
    expect(texts.some(t => t.includes(String(component.repositorio.stars)))).toBeTrue();
  });

  // Prueba 6: Muestra la fecha de creación
  it('should display the createdAt date', () => {
    const values = debug.queryAll(By.css('.detail-value'));
    const texts = values.map(v => v.nativeElement.textContent.trim());
    expect(texts.some(t => t.includes(component.repositorio.createdAt))).toBeTrue();
  });


  // Prueba 8: Muestra el ID del repositorio
  it('should display the repositorio id', () => {
    const values = debug.queryAll(By.css('.detail-value'));
    const texts = values.map(v => v.nativeElement.textContent.trim());
    expect(texts.some(t => t.includes('#' + component.repositorio.id))).toBeTrue();
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

  // Prueba 13: Existe el botón volver
  it('should display the back button', () => {
    const btn = debug.query(By.css('.btn-volver'));
    expect(btn).toBeTruthy();
  });

  // Prueba 14: El ícono de la carpeta existe
  it('should render the repo icon', () => {
    const icon = debug.query(By.css('.repo-icon'));
    expect(icon).toBeTruthy();
  });

  // Prueba 15: Cambiar el repositorio actualiza el nombre
  it('should update name when repositorio changes', () => {
    const newRepo = generateRepositorio();
    component.repositorio = newRepo;
    fixture.detectChanges();
    const name = debug.query(By.css('.detail-header-info h1')).nativeElement.textContent;
    expect(name).toContain(newRepo.name);
  });
});