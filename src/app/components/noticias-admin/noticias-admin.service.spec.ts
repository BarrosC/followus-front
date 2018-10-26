import { TestBed, inject } from '@angular/core/testing';

import { NoticiasAdminService } from './noticias-admin.service';

describe('NoticiasAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticiasAdminService]
    });
  });

  it('should be created', inject([NoticiasAdminService], (service: NoticiasAdminService) => {
    expect(service).toBeTruthy();
  }));
});
