import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);

  /*userName = computed(
    () => this.usersService.users.find(u => u.id === this.userId())?.name);
*/
  userName = '';
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.paramMap.subscribe({
      // paramMap is key/value pair: :userId -> value
      next: paramMap => {
        this.userName = this.usersService.users.find( u => u.id === paramMap.get('userId'))?.name || '';
        console.log(paramMap.get('userId'));
      }
    })
  }
}
