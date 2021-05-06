import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-read-all',
  templateUrl: './todo-read-all.component.html',
  styleUrls: ['./todo-read-all.component.css']
})
export class TodoReadAllComponent implements OnInit {

  todo: Todo = {
    id: '',
    tittle: '',
    description: '',
    idUser: ''
  }

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.todo).subscribe((response) => {
      console.log(response)
    })
  }

}
