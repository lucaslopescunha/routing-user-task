import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveTitle, resolveUserName, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { userRoutes } from './users/users.routes';

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'No task selected'
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: userRoutes,
        data: {
            /** This will be a message input to UserTasksComponent.
             * With withComponentInputBinding enabled on app.config.ts
            */
            message: 'Hello!' 
        },
        resolve: {
            /**
             * Sending dynamic data.
             */
            userName: resolveUserName
        },
        title: resolveTitle
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
