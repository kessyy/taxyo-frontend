import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { 
  TextInputComponent,
  SelectInputComponent,
  ButtonComponent
 } from '../../components';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    ButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSubmit(): void {
    this.submitted = true;
    // TODO: Implement login logic here when backend is ready
    // if (this.loginForm.invalid) {
    //   Swal.fire('Error', 'Please enter valid email and password.', 'error');
    //   return;
    // }
    // this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    //   next: (user) => {
    //     if (user?.user.id) {
    //       this.dataService.saveLoggedInUser(user);
    //       this.router.navigate(['/admin/dashboard']);
    //     } else {
    //       Swal.fire('An error occured', 'Invalid credentials', 'error');
    //     }
    //   },
    //   error: (err) => {
    //     Swal.fire('Error', 'Invalid email or password', 'error');
    //   }
    // });
  }

}
