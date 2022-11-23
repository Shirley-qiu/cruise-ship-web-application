import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCateringComponent } from './modify-catering.component';

describe('ModifyCateringComponent', () => {
  let component: ModifyCateringComponent;
  let fixture: ComponentFixture<ModifyCateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCateringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
