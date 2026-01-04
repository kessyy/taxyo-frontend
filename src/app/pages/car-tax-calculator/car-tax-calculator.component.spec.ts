import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTaxCalculatorComponent } from './car-tax-calculator.component';

describe('CarTaxCalculatorComponent', () => {
  let component: CarTaxCalculatorComponent;
  let fixture: ComponentFixture<CarTaxCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarTaxCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTaxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
