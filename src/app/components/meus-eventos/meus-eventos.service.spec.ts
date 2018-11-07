import { TestBed, inject } from '@angular/core/testing';

import { MeusEventosService } from './meus-eventos.service';

describe('MeusEventosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeusEventosService]
    });
  });

  it('should be created', inject([MeusEventosService], (service: MeusEventosService) => {
    expect(service).toBeTruthy();
  }));
});
