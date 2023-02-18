import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TaskComponent } from './shared/task/task.component';
import {TasksService} from "./services/tasks.service";
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { TaskEditorComponent } from './shared/task-editor/task-editor.component';

@NgModule({
  declarations: [
    TasksListComponent,
    TaskComponent,
    CheckboxComponent,
    TaskEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TasksService],
  bootstrap: [TasksListComponent]
})
export class AppModule { }
