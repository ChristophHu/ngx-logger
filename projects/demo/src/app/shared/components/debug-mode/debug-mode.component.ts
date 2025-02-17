import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select'
@Component({
  selector: 'debug-mode',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule
  ],
  templateUrl: './debug-mode.component.html',
  styleUrls: ['./debug-mode.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DebugModeComponent {
  options: any[] = [
    { value: 'database', label: 'Datenbank' },
    { value: 'storage', label: 'Konsole' },
    { value: 'file', label: 'Lokale Datei' }
  ]
  debug: boolean = false

  constructor(private _router: Router) {
    document.body.classList.contains('debug') ? this.debug = true : this.debug = false
  }

  toggle() {
    this.debug = !this.debug
    switch (this.debug) {
      case true:
        document.body.classList.add('debug')
        break
      case false:
        document.body.classList.remove('debug')
        break
    }
  }
}
