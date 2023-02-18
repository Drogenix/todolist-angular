import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../entities/task";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task:Task;

  @Output() deleteTask = new EventEmitter<Task>();

  @Output() updateState = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onCheckboxChange()
  {
    this.task.isComplete = !this.task.isComplete;

    this.updateState.emit();
  }

  onTaskDelete()
  {
    this.deleteTask.emit(this.task);
  }

}
