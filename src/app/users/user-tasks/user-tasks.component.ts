import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  message = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroy = inject(DestroyRef);

  /*userName = computed(
    () => this.usersService.users.find(u => u.id === this.userId())?.name);
*/
  userName = '';
  ngOnInit(): void {
    console.log('Input Data: '+ this.message());
    /**
     * this.activatedRoute.snapshot is not a reactive object. Only executed once.
     * You can access directly.
     */
    console.log('snapshot: ',this.activatedRoute.snapshot);
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.pipe(map((obj) => obj.get('userId'))).subscribe({
      // paramMap is key/value pair: :userId -> value
      next: userId => {
        this.userName = this.usersService.users.find( u => u.id === userId)?.name || '';
        //console.log(paramMap.get('userId'));
      }
    });
    this.destroy.onDestroy(()=> subscription.unsubscribe());
  }
}
