import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "This is Title",
        desc: "description",
        active: true
      },
      {
        sno: 2,
        title: "This is Title2",
        desc: "description",
        active: true
      },
      {
        sno: 3,
        title: "This is Title3",
        desc: "description",
        active: true
      }
    ]
  }
  ngOnInit(): void{}
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }
  addTodo(todo: Todo){
    console.log(todo);
    // const index = this.todos.indexOf(todo)
    this.todos.push(todo)
  }
}
