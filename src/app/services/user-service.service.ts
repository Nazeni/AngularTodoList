import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Todo } from '../models/todo.model';
import { MyList } from '../models/myList.model';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor() { }

  getUsersList(){
      return usersList;
  }

}

let usersList = new MyList<User>([
    {
      id: 1,
      firstName: 'User1',
      lastName: 'Lastname1',
      email: 'user1emial@gmail.com',
      password: 'pass111',
      todoList: new MyList<Todo>([
        { id: 1, title: 'Todo1' },
        { id: 2, title: 'Todo2' },
      ]),
    },
    {
      id: 2,
      firstName: 'User2',
      lastName: 'Lastname2',
      email: 'user2emial@gmail.com',
      password: 'pass2',
      todoList: new MyList<Todo>(),
    },
    {
      id: 3,
      firstName: 'User3',
      lastName: 'Lastname3',
      email: 'user3emial@gmail.com',
      password: 'pass3',
      todoList: new MyList<Todo>([{ id: 3, title: 'Todo3' }]),
    },
  ]);
  
