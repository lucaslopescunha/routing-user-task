import { Routes } from "@angular/router";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";
import { resolverUserTasks, TasksComponent } from "../tasks/tasks.component";

export const userRoutes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        component: TasksComponent,
        /**
         * to trigger the resolver because neither the path parameters nor query parameters
         * changed.
         */
        runGuardsAndResolvers: 'always',
//        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
            userTasks: resolverUserTasks
        }
    },
    {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
    }
]