import { Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/new', component: TaskFormComponent },
  { path: 'tasks/edit/:id', component: TaskFormComponent },
];

export const appRouting = [provideRouter(routes, withComponentInputBinding())];

