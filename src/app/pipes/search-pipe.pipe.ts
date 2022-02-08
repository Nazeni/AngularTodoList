import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

    transform(items:User[], value: string): User[] {
        console.log("PIPE USERS:", items, value);
        if(value !== undefined) {
            return items.filter((item) => item.firstName.toLowerCase().includes(value.toLowerCase()));
        
        }else{
            return items;
        }
    }
}
