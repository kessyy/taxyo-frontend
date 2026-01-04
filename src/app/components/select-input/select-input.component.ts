import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-input',
  imports: [
    CommonModule,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectInputComponent),
    }
  ]
})
export class SelectInputComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() label: string = '';
  @Input() inputId: string = 'inputId'
  @Input() items!: string[];
  @Input() placeholder: string = 'Select an option';
  @Input() isIcon?: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() onDropdownChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChangeEvent: EventEmitter<string> = new EventEmitter<string>();
  selectedItem!: string;
  input!: string;

  constructor() {}

  ngOnInit() {
    this.selectedItem = this.items && this.items[0];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] && changes['items'].previousValue) {
    }
  }

  onChange(value: any) {
    this.input = value;
    this.onChangeEvent.emit(this.input)
    this.onDropdownChanged.emit(value);
  }
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

  onSelectedValue(selectedItem: string) {
    this.selectedItem = selectedItem;
    this.onDropdownChanged.emit(this.selectedItem);
  }
}
