import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { C1Component } from './c1.component';
import { C2Component } from './c2.component';
import { C3Component } from './c3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, C1Component, C2Component, C3Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCheckedDefer = signal(false);
}
