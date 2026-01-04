import { Routes } from '@angular/router';
import { 
  HomeComponent,
  CarListComponent,
  CarTaxCalculatorComponent,
  NotFoundComponent,
  AddCarComponent,
  AdminDashboardComponent,
  AddTaxRuleComponent
} from './pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'car-tax-calculator', component: CarTaxCalculatorComponent },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'add-car', component: AddCarComponent },
      { path: 'add-tax-rule', component: AddTaxRuleComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];
