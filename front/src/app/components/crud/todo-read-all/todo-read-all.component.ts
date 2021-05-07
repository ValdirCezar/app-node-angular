import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-todo-read-all',
  templateUrl: './todo-read-all.component.html',
  styleUrls: ['./todo-read-all.component.css']
})
export class TodoReadAllComponent implements OnInit {

  datepipe: DatePipe = new DatePipe('pt-BR');

  todo: Todo = {
    id: '',
    tittle: '',
    description: '',
    idUser: '1'
  }

  list: Todo[] = []

  constructor(private service: TodoService, public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.findAll();
  }

  create(): void {
    this.service.create(this.todo).subscribe((response) => {
      this.findAll();
    })
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      resposta.forEach(todo => {
        const dt = new Date(todo.createdAt);
        todo.createdAt = dt.toLocaleString();
      })
      this.list = resposta;
    })
  }

}