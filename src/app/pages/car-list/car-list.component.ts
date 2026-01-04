import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services';
import { Car } from '../../models';
import { ButtonComponent } from '../../components';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-list',
  imports: [
    ButtonComponent,
    CommonModule,
    RouterModule,
    DecimalPipe
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  viewCar(car: Car) {
    console.log('View car', car);
  }

}
