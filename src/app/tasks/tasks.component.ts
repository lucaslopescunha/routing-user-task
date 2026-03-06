import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  userId = input.required<string>();
  //order = input<'asc' | 'desc'>();
  order?: 'asc' | 'desc';
  private tasksService = inject(TasksService);
  userTasks = computed(() => 
      this.tasksService.allTasks().filter((task) => task.userId === this.userId())
  );

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: params => this.order = params['order'],
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
