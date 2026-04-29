/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';

import { RespositorioListComponent } from './repositorio-list.component';
import { Repositorio } from '../repositorio';

describe('RespositorioListComponent', () => {

  let component: RespositorioListComponent;
  let fixture: ComponentFixture<RespositorioListComponent>;
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

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RespositorioListComponent],
      imports: [HttpClientTestingModule, NgxPaginationModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespositorioListComponent);
    component = fixture.componentInstance;
    component.repositorios = Array.from({ length: 10 }, generateRepositorio);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  // Prueba 1: El componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Muestra máximo 6 cards por página
  it('should display at most 6 repo cards per page', () => {
    const cards = debug.queryAll(By.css('.repo-card'));
    expect(cards.length).toBeLessThanOrEqual(6);
  });

  // Prueba 3: Cada card tiene un language badge
  it('should display language badge in each card', () => {
    const badges = debug.queryAll(By.css('.language-badge'));
    expect(badges.length).toBeGreaterThan(0);
  });

  // Prueba 4: Cada card tiene un botón View Details
  it('should display View Details button in each card', () => {
    const buttons = debug.queryAll(By.css('.btn-detail'));
    expect(buttons.length).toBeGreaterThan(0);
  });

  // Prueba 5: currentPage inicia en 1
  it('should start on page 1', () => {
    expect(component.currentPage).toBe(1);
  });

  // Prueba 6: El grid de repositorios existe
  it('should render the repos grid', () => {
    const grid = debug.query(By.css('.repos-grid'));
    expect(grid).toBeTruthy();
  });

  // Prueba 7: Muestra la paginación
  it('should display pagination controls', () => {
    const pagination = debug.query(By.css('pagination-controls'));
    expect(pagination).toBeTruthy();
  });

  // Prueba 8: No muestra más cards que repositorios disponibles
  it('should not display more cards than repositorios available', () => {
    component.repositorios = Array.from({ length: 3 }, generateRepositorio);
    fixture.detectChanges();
    const cards = debug.queryAll(By.css('.repo-card'));
    expect(cards.length).toBe(3);
  });

  // Prueba 9: Cada card muestra el nombre del repo
  it('should display repo name in each card', () => {
    const names = debug.queryAll(By.css('.card-info h2'));
    expect(names.length).toBeGreaterThan(0);
  });

  // Prueba 10: Cada card muestra la descripción
  it('should display repo description in each card', () => {
    const descriptions = debug.queryAll(By.css('.description'));
    expect(descriptions.length).toBeGreaterThan(0);
  });

  // Prueba 11: Cada card muestra las stats
  it('should display stats in each card', () => {
    const stats = debug.queryAll(By.css('.card-stats'));
    expect(stats.length).toBeGreaterThan(0);
  });

  // Prueba 12: El heading existe
  it('should render the page heading', () => {
    const heading = debug.query(By.css('.page-heading'));
    expect(heading).toBeTruthy();
  });

  // Prueba 13: El título es Repositorios
  it('should display Repositorios as the title', () => {
    const title = debug.query(By.css('.page-heading h1')).nativeElement.textContent;
    expect(title).toContain('Repositorios');
  });

  // Prueba 14: Los links de detalle tienen el routerLink correcto
  it('should have routerLink on each View Details button', () => {
    const links = debug.queryAll(By.css('.btn-detail'));
    links.forEach(link => {
      expect(link.attributes['ng-reflect-router-link']).toBeTruthy();
    });
  });

  // Prueba 15: Con 0 repositorios no muestra cards
  it('should display no cards when repositorios is empty', () => {
    component.repositorios = [];
    fixture.detectChanges();
    const cards = debug.queryAll(By.css('.repo-card'));
    expect(cards.length).toBe(0);
  });
});