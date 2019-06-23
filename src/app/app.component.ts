import { Component, OnInit  } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoArray = [];

  constructor( private todoService: TodoService) {

  }
  ngOnInit() {
    this.todoArray = this.todoService.getTodo();
  }


  addTodo(value) {
    this.todoService.addTodo(value);
  }

  delete(value) {
    this.todoService.deleteItem(value);
  }

  todoSubmit ( value ) {
    if (value !== '' ) {
      this.todoService.addTodo(value);
    }  else  {
     alert('Field required **');
   }
  }

}
