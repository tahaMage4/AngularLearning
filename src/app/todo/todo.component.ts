import { Component } from '@angular/core';
import { Todo } from '../types/data.types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos: Todo[];
  localItems!: string | null;
  constructor() {
    // When the App Reload the Storage on the localStorage
    this.localItems = localStorage.getItem('todos');
    if (this.localItems === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItems);
    }
  }

  //! For delete the todo
  deleteTodo(todo: Todo) {
    console.log('Parent Todo Delete', todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  //* For Add Todo
  addTodo(todo: Todo) {
    console.log('Parent Todo Add', todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  //? For Toggle Todo
  toggleTodo(todo: Todo) {
    console.log('Parent Todo Toggle', todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
