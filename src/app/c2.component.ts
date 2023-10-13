import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c2',
  standalone: true,
  imports: [],
  template: `
  <div><strong>app-c2</strong>: {{text}}</div>
  `,
  styles: ''
})
export class C2Component {
  @Input() text = 'text';
}
