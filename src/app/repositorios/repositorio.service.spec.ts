/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepositorioService } from './repositorio.service';

describe('Service: Repositorio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositorioService]
    });
  });

  it('should ...', inject([RepositorioService], (service: RepositorioService) => {
    expect(service).toBeTruthy();
  }));
});
