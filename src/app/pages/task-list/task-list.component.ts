import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  toggleTaskStatus(task: Task): void {
    task.isCompleted = !task.isCompleted;
    this.taskService.updateTask(task).subscribe(() => this.loadTasks());
  }

  editTask(id: number): void {
    this.router.navigate(['/tasks/edit', id]);
  }

  deleteTask(taskId: number): void {
    if (confirm('¿Eliminar esta tarea?')) {
      this.taskService.deleteTask(taskId).subscribe(() => this.loadTasks());
    }
  }

  navigateToNewTask(): void {
    this.router.navigate(['/tasks/new']);
  }
}
