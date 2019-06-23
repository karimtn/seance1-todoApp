import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArray = [];

  constructor() { }

  getTodo() {
    if ( localStorage.getItem('todoArray')) {
      this.todoArray = JSON.parse(localStorage.getItem('todoArray'));
      return this.todoArray;
    }
      return;
  }

  addTodo(value) {
    this.todoArray.push(value);
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray));

  }

  deleteItem(value) {
    for ( let i = 0; i <= this.todoArray.length; i++) {
      if ( value === this.todoArray[i] ) {
        this.todoArray.splice( i, 1 );
      }
    }
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray));

  }

}
