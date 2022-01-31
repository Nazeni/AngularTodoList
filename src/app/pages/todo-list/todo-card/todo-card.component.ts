import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input()  todo: Todo | null = null;
  @Input() user: User | null = null;
  constructor() { }

  ngOnInit(): void {}

}
