import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRulesListComponent } from './tax-rules-list.component';

describe('TaxRulesListComponent', () => {
  let component: TaxRulesListComponent;
  let fixture: ComponentFixture<TaxRulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxRulesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxRulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
