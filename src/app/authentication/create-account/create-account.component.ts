import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent, ButtonComponent } from '../../components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    ButtonComponent
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent implements OnInit {
  createAccountForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: this.checkPasswords});
  }

  /**
   * Checks for same passwords
   * @param formGroup element
   * @return notSame: boolean
   */
  checkPasswords(formGroup: FormGroup) {
    const pass = formGroup.get('password')?.value;
    const confirmPass = formGroup.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    this.submitted = true;
    // if (this.createAccountForm.invalid) return;
    // this.authenticationService.register(this.createAccountForm.value).subscribe({
    //   next: (res) => {
    //     Swal.fire('Created', 'User created successfully.', 'success');
    //     this.router.navigate(['users']); 
    //   },
    //   error: (err) => {
    //     Swal.fire('Error', 'Failed to create user.', 'error');
    //   }
    // });
  }

}
