import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Correct

import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routing-user-task');
}
