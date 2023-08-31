import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../types/data.types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  // Accept the todo through Input Decorater  For Accept the todo
  @Input() todo!: Todo;
  @Input() i!: number;

  // Yeha pe jo bhe hoga wo parent compontent ko pass ho sakta ha
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoChecked: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  DelteTodoItem(todo: Todo) {
    alert('Delte Todo');
    this.todoDelete.emit(todo);
  }

  OnChecked(todo: Todo) {
    this.todoChecked.emit(todo);
  }
}
