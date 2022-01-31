import { IWithIdentity } from "./indentity.model";
import { MyList } from "./myList.model";
import { Todo } from "./todo.model";

export class User implements IWithIdentity {
      constructor(
        public id: number,
        public name: string,
        public todoList: MyList<Todo>,
        public showTodos: boolean
      ) {
      }
    }