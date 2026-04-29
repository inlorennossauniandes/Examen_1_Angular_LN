import { waitForAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RepositorioService } from './repositorio.service';

describe('RepositorioService', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  }));

  it('should be created', () => {
    const service: RepositorioService = TestBed.inject(RepositorioService);
    expect(service).toBeTruthy();
  });
});