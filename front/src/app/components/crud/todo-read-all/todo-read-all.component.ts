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
      this.showToastrSuccess("Successfuly create To-do", "Create", 4000);
    }, err => {
      console.log(err);
      
      this.showToastrError(err.error.message, "Create", 4000);
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
      this.showToastrSuccess("Successfuly deleting To-do", "Delete", 4000);
    })
  }

  showToastrSuccess(description: string, tittle: string, time: any) {
    this.toastr.success(description, tittle, {
      timeOut: time
    })
  }

  showToastrError(description: string, tittle: string, time: any) {
    this.toastr.error(description, tittle, {
      timeOut: time,
    })
  }
}