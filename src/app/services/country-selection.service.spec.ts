import { TestBed } from '@angular/core/testing';

import { CountrySelectionService } from './country-selection.service';

describe('CountrySelectionService', () => {
  let service: CountrySelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrySelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
