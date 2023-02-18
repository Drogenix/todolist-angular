import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent  {
  @Output() readonly change: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Input() checked:boolean = false;
  constructor() { }

  onInputClick()
  {
    this.checked = !this.checked;
  }

}
