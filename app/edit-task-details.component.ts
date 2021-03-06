import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <h3>Edit description: {{ task.description }}</h3>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
