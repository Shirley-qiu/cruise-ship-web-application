import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCateringComponent } from './order-catering.component';

describe('OrderCateringComponent', () => {
  let component: OrderCateringComponent;
  let fixture: ComponentFixture<OrderCateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCateringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
