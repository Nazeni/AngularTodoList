import { Component, OnInit, Output } from '@angular/core';
import { IWithIdentity } from '../../models/indentity.model';  
import { User } from '../../models/user.model';
import { Todo } from '../../models/todo.model'; 
import { MyList } from '../../models/myList.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList!: MyList <User>;
  user1!: User | null;
  user2!: User | null;
  user3!: User | null;
  showTodos = false;
  
  constructor() { 
    this.usersList = new MyList<User>();
    
    this.usersList.add({
      id: 1,
      name: "User 1",
      todoList: new MyList(),
      showTodos: false
    });
    
    this.user1 = this.usersList.findById(1);
    if (!!this.user1) {
      this.user1.todoList.add({
        id: 1,
        title: "Wake up",
      });

      this.user1.todoList.add({
        id: 2,
        title: "Wake up 2",
      });
    
      this.user1.todoList.add({
        id: 3,
        title: "Go to Angular class",
      });
    
      this.user1.todoList.add({
        id: 4,
        title: "After the class do homework",
      });
      
    }

    //User 2

    this.usersList.add({
      id: 2,
      name: "User 2",
      todoList: new MyList(),
      showTodos: false
    });
    
    this.user2 = this.usersList.findById(2);
    if (!!this.user2) {
      this.user2.todoList.add({
        id: 1,
        title: "Wake up",
      });

      this.user2.todoList.add({
        id: 2,
        title: "Wake up 2",
      });
    
      this.user2.todoList.add({
        id: 3,
        title: "Go to Angular class",
      });
      
    }

    //USER 3
    this.usersList.add({
      id: 3,
      name: "User 3",
      todoList: new MyList(),
      showTodos: false
    });
  }

  ngOnInit(): void {
      console.log("USERS1:", this.user1, "USERS1 TODOLIST:", this.user1?.todoList  )
  }
}
  
