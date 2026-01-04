import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent} from '../../components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ 
    ReactiveFormsModule, 
    ButtonComponent 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}

  viewCars() {
    // Logic to navigate to the car listings page
  }

  calculateTax() {
    this.router.navigate(['/car-tax-calculator']);
  }

}
