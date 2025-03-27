import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: number | null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      isCompleted: [false]
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.taskId = +id;
        this.loadTask(this.taskId);
      }
    });
  }

  loadTask(id: number): void {
    this.taskService.getTaskById(id).subscribe(task => {
      this.taskForm.patchValue(task);
    });
  }

  saveTask(): void {
    if (this.taskForm.invalid) return;

    const task: Task = this.taskForm.value;
    if (this.taskId) {
      task.id = this.taskId;
      this.taskService.updateTask(task).subscribe(() => this.router.navigate(['/tasks']));
    } else {
      this.taskService.createTask(task).subscribe(() => this.router.navigate(['/tasks']));
    }
  }

  cancel(): void {
    this.router.navigate(['/tasks']);
  }
}
