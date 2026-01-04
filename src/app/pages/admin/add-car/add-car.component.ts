import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent, TextInputComponent, SelectInputComponent } from '../../../components';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  imports: [
    ButtonComponent, 
    ReactiveFormsModule,
    TextInputComponent,
    SelectInputComponent
  ],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss',
})
export class AddCarComponent implements OnInit {
  addCarForm!: FormGroup;
  submitted = false;
  fuelTypes: string[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
    this.addCarForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      engineSize: ['', Validators.required],
      fuelType: ['', Validators.required],
      cifValue: ['', Validators.required]
    });
  }

  onFuelTypeChanged(selectedFuelType: string): void {
    this.addCarForm.patchValue({ fuelType: selectedFuelType });
  }

  onSubmit() {
    if (this.addCarForm.invalid) return;

    const car = this.addCarForm.value;
    // send to backend or store
  }

}
