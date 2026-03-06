import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  userName = input.required<string>();
  message = input.required<string>();
  private activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    /**
     * Will re-emit value whenever data changes.
     * 
     */
    this.activatedRoute.data.subscribe({

      next: data => {
        /**
         * Data and resolve. Static and dynamic data.
         */
        console.log(data);
      }
    })
  }
  /*  
  userId = input.required<string>();
  userName = '';
  
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroy = inject(DestroyRef);
  */
  /*userName = computed(
    () => this.usersService.users.find(u => u.id === this.userId())?.name);
*/
/**  ngOnInit(): void {
    console.log('Input Data: ' + this.message());*/
    /**
     * this.activatedRoute.snapshot is not a reactive object. Only executed once.
     * You can access directly.
     */
    /**console.log('snapshot: ', this.activatedRoute.snapshot);
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.pipe(map((obj) => obj.get('userId'))).subscribe({
      // paramMap is key/value pair: :userId -> value
      next: userId => {
        this.userName = this.usersService.users.find(u => u.id === userId)?.name || '';
        //console.log(paramMap.get('userId'));
      }
    });
    this.destroy.onDestroy(() => subscription.unsubscribe());
  }*/
}
/**
 * This resolve will be called for every navigation action. Whenever this route becomes active,
 * this function will be called.
 * @param activatedRoute 
 */
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find(
    (u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};