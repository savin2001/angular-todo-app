import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // This is a declaration of an array todos made up of objects called Todo
  todos!: Todo[];

  // This is the input value
  inputTodo: string = '';

  submitTodo: string = 'Add todo';

  constructor() {}

  ngOnInit(): void {
    // Values of the array are passed as follows
    this.todos = [
      {
        content: 'Example template of todo',
        completed: false,
      },
    ];
  }

  // Toggles the task to be done if completed and vice versa
  toggleDone(id: number) {
    this.todos.map((value, index) => {
      if (index === id) value.completed = !value.completed;

      return value;
    });
  }

  // Deleting the todo
  deleteTodo(id: number) {
    this.todos = this.todos.filter((value, index) => index !== id);
  }

  // Adding new todo to the todos array
  addTodo() {
    if (this.inputTodo !== '') {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
      });
      this.inputTodo = '';
    } else {
      this.submitTodo = 'Enter valid input';
    }
  }
}
