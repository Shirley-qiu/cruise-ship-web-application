import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBookingComponent } from './change-booking.component';

describe('ChangeBookingComponent', () => {
  let component: ChangeBookingComponent;
  let fixture: ComponentFixture<ChangeBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
