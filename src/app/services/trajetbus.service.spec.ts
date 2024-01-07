import { TestBed } from '@angular/core/testing';

import { TrajetbusService } from './trajetbus.service';

describe('TrajetbusService', () => {
  let service: TrajetbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrajetbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
