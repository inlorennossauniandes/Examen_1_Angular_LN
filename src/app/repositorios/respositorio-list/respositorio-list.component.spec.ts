/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RespositorioListComponent } from './respositorio-list.component';

describe('RespositorioListComponent', () => {
  let component: RespositorioListComponent;
  let fixture: ComponentFixture<RespositorioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespositorioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespositorioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
