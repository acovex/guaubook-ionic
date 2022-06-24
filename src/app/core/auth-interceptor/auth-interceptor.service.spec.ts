import { TestBed, inject } from '@angular/core/testing';
import { AuthIterceptorService } from './auth-interceptor.service';

describe('AuthInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthIterceptorService]
    });
  });

  it('should be created', inject([AuthIterceptorService], (service: AuthIterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
