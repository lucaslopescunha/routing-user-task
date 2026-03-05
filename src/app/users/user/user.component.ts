import { Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [RouterLink],
})
export class UserComponent {
  user = input.required<User>();

  imagePath = computed(() => 'users/' + this.user().avatar);
}
