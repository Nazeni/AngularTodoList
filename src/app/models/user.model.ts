import { IWithIdentity } from "./indentity.model";
import { MyList } from "./myList.model";
import { Todo } from "./todo.model";

export class User implements IWithIdentity {
      constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: any,
        public password: any,
        public todoList: MyList<Todo>
      ) {
      }
    }