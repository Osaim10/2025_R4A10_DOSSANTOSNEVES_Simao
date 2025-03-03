import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripGeneratorComponent } from './trip-generator.component';

describe('TripGeneratorComponent', () => {
  let component: TripGeneratorComponent;
  let fixture: ComponentFixture<TripGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
