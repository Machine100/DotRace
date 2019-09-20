import { TestBed } from '@angular/core/testing';

import { DotcontrolService } from './dotcontrol.service';

describe('DotcontrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DotcontrolService = TestBed.get(DotcontrolService);
    expect(service).toBeTruthy();
  });
});
