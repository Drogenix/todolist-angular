import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from "../../entities/task";
import {TasksService} from "../../services/tasks.service";
import {ReplaySubject, takeUntil} from "rxjs";

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {

  private _destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  tasks: Task[];

  isEditorOpen: boolean = false;

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks()
      .pipe(takeUntil(this._destroy))
      .subscribe(tasks =>
      {
        this.tasks = tasks;
      })
  }

  ngOnDestroy(): void {
    this._destroy.next(null);
    this._destroy.complete();
  }
  toggleEditor(value:boolean) {
    this.isEditorOpen = value;
  }

  createTask(text:string) {
    const task = this.tasksService.createTask(text);

    this.tasks.push(task);

    this.tasksService.saveTasks(this.tasks);

    this.toggleEditor(false);
  }

  deleteTask(taskToDelete:Task){

    const indexOf = this.tasks.indexOf(taskToDelete);

    this.tasks.splice(indexOf,1);

    this.tasksService.saveTasks(this.tasks);
  }

  updateTasks()
  {
    this.tasksService.saveTasks(this.tasks);
  }
}
