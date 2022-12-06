import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitiesDetailsComponent } from './amenities-details.component';

describe('AmenitiesDetailsComponent', () => {
  let component: AmenitiesDetailsComponent;
  let fixture: ComponentFixture<AmenitiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmenitiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenitiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
