import { waitForAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  }));

  it('should be created', () => {
    const service: UsuarioService = TestBed.inject(UsuarioService);
    expect(service).toBeTruthy();
  });
});