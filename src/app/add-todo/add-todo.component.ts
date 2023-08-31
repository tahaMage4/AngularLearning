import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../types/data.types';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
  title!: string;
  desc!: string;
  name!: string;

  onSubmit() {
    const todo: Todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      name: this.name,
      active: true,
    };

    this.todoAdd.emit(todo);
  }
}
