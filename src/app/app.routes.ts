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
import { CreateAccountComponent } from './authentication/create-account/create-account.component';
import { LoginComponent } from './authentication/login/login.component';

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
  {
    path: 'authentication',
    children: [
      { path: '', component: HomeComponent },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];
