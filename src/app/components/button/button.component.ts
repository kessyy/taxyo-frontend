import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
@Input() text: string = 'Button';
@Input() type: 'button' | 'submit' | 'reset' = 'button';
@Input() variant: 'primary' | 'outline' | 'danger' | 'secondary' = 'primary';
@Input() disabled: boolean = false;
@Input() fullWidth: boolean = false;
@Input() loading: boolean = false;
@Input() icon?: string; 
}
