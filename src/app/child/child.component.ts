import { Component, Input, Output, VERSION, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name = 'Angular ' + VERSION.major;
  @Input() items: string;
  // @Output() updateDataEvent = new EventEmitter<string>;
}
