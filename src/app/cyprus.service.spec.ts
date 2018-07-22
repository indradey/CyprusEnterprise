import { TestBed, inject } from '@angular/core/testing';

import { CyprusService } from './cyprus.service';

describe('CyprusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CyprusService]
    });
  });

  it('should be created', inject([CyprusService], (service: CyprusService) => {
    expect(service).toBeTruthy();
  }));
});
