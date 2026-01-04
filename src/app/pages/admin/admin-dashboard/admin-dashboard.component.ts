import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../components';

@Component({
  selector: 'app-admin-dashboard',
  imports: [ButtonComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}

  goToAddCar() {
    this.router.navigate(['/admin/add-car']);
  }

  goToAddTaxRule() {
    this.router.navigate(['/admin/add-tax-rule']);
  }
}
