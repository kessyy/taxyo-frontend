import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, TextInputComponent, SelectInputComponent } from '../../../components';

@Component({
  selector: 'app-add-tax-rule',
  imports: [
    CommonModule,
    ButtonComponent, 
    ReactiveFormsModule,
    TextInputComponent,
    SelectInputComponent,
    TextInputComponent
  ],
  templateUrl: './add-tax-rule.component.html',
  styleUrl: './add-tax-rule.component.scss',
})
export class AddTaxRuleComponent implements OnInit {
  addTaxRuleForm!: FormGroup;
  taxRuleTypes: string[] = ['PERCENTAGE', 'FLAT'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addTaxRuleForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['PERCENTAGE', Validators.required],
      rate: [null],
      amount: [null],
      appliesIfCarAgeGreaterThan: [null]
    });

    this.addTaxRuleForm.get('type')?.valueChanges.subscribe(type => {
      if (type === 'PERCENTAGE') {
        this.addTaxRuleForm.get('rate')?.setValidators([Validators.required]);
        this.addTaxRuleForm.get('amount')?.clearValidators();
      } else {
        this.addTaxRuleForm.get('amount')?.setValidators([Validators.required]);
        this.addTaxRuleForm.get('rate')?.clearValidators();
      }
      this.addTaxRuleForm.get('rate')?.updateValueAndValidity();
      this.addTaxRuleForm.get('amount')?.updateValueAndValidity();
    });
  }

  taxRuleTypeChanged(selectedFuelType: string): void {
    this.addTaxRuleForm.patchValue({ fuelType: selectedFuelType });
  }

  onSubmit() {

  }

}
