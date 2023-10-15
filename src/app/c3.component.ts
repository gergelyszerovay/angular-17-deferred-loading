import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c3',
  standalone: true,
  imports: [],
  template: `
  <div><strong>app-c3</strong>: {{text}}</div>
  `,
  styles: ''
})
export class C3Component {
  @Input() text = 'text';
}
