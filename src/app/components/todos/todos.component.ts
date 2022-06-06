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
  constructor() {}

  ngOnInit(): void {
    // Values of the array are passed as follows
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
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
  
}