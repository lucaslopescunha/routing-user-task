import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  userTasks: Task[] = [];
}
