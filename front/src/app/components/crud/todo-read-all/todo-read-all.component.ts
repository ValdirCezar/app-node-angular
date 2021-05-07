import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    idUser: '1'
  }

  list: Todo[] = []

  constructor(
    private service: TodoService,
    private toastr: ToastrService) { }

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

  delete(todo: Todo): void {
    this.service.delete(todo.id!).subscribe((response) => {
      this.findAll()
      this.showToastr();
    })
  }
  showToastr() {
    this.toastr.success("Successfuly delete To-do", '', {})
  }
}