import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MyList } from 'src/app/models/myList.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    
    todos = [
        {
            id: 1,
            title: "walk up"
        },
        {
            id: 2,
            title: "brush teeths"
        },
        {
            id: 3,
            title: "have breakfast"
        }
    ]

  ngOnInit(): void {}

  resetTodos(){
      this.todos = [];
  }
}
