import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'logger-toggle',
  imports: [
    CommonModule
  ],
  templateUrl: './logger-toggle.component.html',
  styleUrl: './logger-toggle.component.sass'
})
export class LoggerToggleComponent {
  debug: any

  toggle() {
    
  }
}
