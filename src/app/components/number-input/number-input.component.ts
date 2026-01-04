import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  imports: [ ReactiveFormsModule ],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
})
export class NumberInputComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
}
