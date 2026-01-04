import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextInputComponent),
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() inputId: string = 'inputId'
  @Input() placeHolder: string = '';
  @Input() type: string = 'text';
  @Input() isDisabled: boolean = false;
  @Input() invalidInput: boolean = false;
  @Input() isEyeIcon: boolean = false;
  @Input() isPasswordHidden: boolean = true;
  @Output() inputChange = new EventEmitter<any>();
  input: string = '';

  onChange: any = () => this.inputChange.emit(this.input);
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(input: string) {
    this.input = input;
  }

  hidePassword() {
    this.isPasswordHidden = !this.isPasswordHidden;
    this.type = (this.isEyeIcon && this.isPasswordHidden) ? 'password' : 'text';
  }
}
