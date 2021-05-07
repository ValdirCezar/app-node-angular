import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = `${environment.baseUrl}/todos`

  constructor(private http: HttpClient) { }

  create(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  findAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl)
  }
}
