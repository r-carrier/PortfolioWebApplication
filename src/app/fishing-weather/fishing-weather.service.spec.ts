import { TestBed } from '@angular/core/testing';

import { FishingWeatherService } from './fishing-weather.service';

describe('FishingWeatherService', () => {
  let service: FishingWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishingWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
