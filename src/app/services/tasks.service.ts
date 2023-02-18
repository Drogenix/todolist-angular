import { Injectable } from '@angular/core';
import {Task} from "../entities/task";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _lastTaskId: number;

  constructor() { }

  private getUniqueId():number {
    return this._lastTaskId + 1;
  }

  getTasks():Observable<any> {
    const tasks = window.localStorage.getItem("toDoList");

    const randomTasks: Task[] = [];

    randomTasks.push(this.createTask('Создать to-do list'));

    randomTasks.push(this.createTask('Наполнить его случайными задачами'));

    if(!tasks)
    {
      return of(randomTasks);
    }

    const json = JSON.parse(tasks) as Task[];

    if(json)
    {
      this._lastTaskId = json[json.length-1].id;
      return of(json);
    }
    else
    {
      return of(randomTasks);
    }
  }

  createTask(text:string):Task {
    const task: Task = {
      id:this.getUniqueId(),
      text: text,
      isComplete:false,
    }

    return task;
  }

  saveTasks(tasks: Task[]) {
    window.localStorage.setItem("toDoList", JSON.stringify(tasks))
  }
}
