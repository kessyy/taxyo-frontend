import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  getCars(): Car[] {
    return [
      {
        id: 1,
        make: 'Toyota',
        model: 'Harrier',
        year: 2018,
        engineSize: 2000,
        fuelType: 'Petrol',
        cifValue: 45000000,
        estimatedTax: 28000000
      },
      {
        id: 2,
        make: 'Subaru',
        model: 'Forester',
        year: 2016,
        engineSize: 2500,
        fuelType: 'Petrol',
        cifValue: 38000000,
        estimatedTax: 24000000
      },
      {
        id: 3,
        make: 'Mercedes-Benz',
        model: 'C200',
        year: 2019,
        engineSize: 2000,
        fuelType: 'Petrol',
        cifValue: 62000000,
        estimatedTax: 41000000
      }
    ];
  }
}
