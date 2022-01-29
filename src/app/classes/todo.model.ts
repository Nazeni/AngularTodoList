import { IWithIdentity } from "../pages/users/indentity.model";
export class Todo implements IWithIdentity {
      constructor(public id: number, public title: string) {
      }
    }