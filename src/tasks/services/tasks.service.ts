import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '../entities/task.entity';
import { TaskValidator } from '../validators/task.validator';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task)
      throw new NotFoundException('Task not found', {
        cause: new Error(),
        description: 'Task not found',
      });
    return task;
  }

  createTask(body: TaskValidator) {
    this.tasks.push({ ...body, id: this.tasks.length + 1 });

    return this.tasks;
  }

  updateTask(id: number, body: TaskValidator) {
    const currentTaskIndex = this.tasks.findIndex((task) => task.id === id);

    if (currentTaskIndex < 0)
      throw new NotFoundException('Task not found', {
        cause: new Error(),
        description: 'Task not found',
      });

    const taskUpdated = { ...body, id };

    this.tasks[currentTaskIndex] = taskUpdated;

    return { taskUpdated, tasks: this.tasks };
  }

  deleteTask(id: number) {
    const task = this.tasks.findIndex((task) => task.id === id);
    if (task < 0)
      throw new NotFoundException('Task not found', {
        cause: new Error(),
        description: 'Task not found',
      });

    this.tasks.splice(task, 1);
    return this.tasks;
  }
}
