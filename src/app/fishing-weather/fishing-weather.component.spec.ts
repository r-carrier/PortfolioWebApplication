import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingWeatherComponent } from './fishing-weather.component';

describe('FishingWeatherComponent', () => {
  let component: FishingWeatherComponent;
  let fixture: ComponentFixture<FishingWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishingWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishingWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
