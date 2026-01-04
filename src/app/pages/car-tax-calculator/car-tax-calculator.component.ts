import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { 
  TextInputComponent,
  SelectInputComponent,
  ButtonComponent
 } from '../../components';

@Component({
  selector: 'app-car-tax-calculator',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    SelectInputComponent,
    ButtonComponent
  ],
  templateUrl: './car-tax-calculator.component.html',
  styleUrl: './car-tax-calculator.component.scss',
})
export class CarTaxCalculatorComponent implements OnInit {
  calculatorForm!: FormGroup;
  submitted = false;
  showResult = false;
  fuelTypes: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
    this.calculatorForm = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      engineSize: ['', Validators.required],
      fuelType: ['', Validators.required],
      cifValue: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    // if (this.calculatorForm.invalid) {
    //   return;
    // }
    // TODO: Implement tax calculation logic here
    this.showResult = true;
  }

  onFuelTypeChanged(selectedFuelType: string): void {
    this.calculatorForm.patchValue({ fuelType: selectedFuelType });
  }
}
