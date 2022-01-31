import { IWithIdentity } from "./indentity.model";
export class Todo implements IWithIdentity {
      constructor(public id: number, public title: string) {
      }
    }