import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaxRuleComponent } from './add-tax-rule.component';

describe('AddTaxRuleComponent', () => {
  let component: AddTaxRuleComponent;
  let fixture: ComponentFixture<AddTaxRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaxRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaxRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
