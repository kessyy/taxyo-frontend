export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  engineSize: number;
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  cifValue: number;
  estimatedTax?: number;
}
