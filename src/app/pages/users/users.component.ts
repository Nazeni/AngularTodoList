import { Component, OnInit, OnChanges } from '@angular/core'; 
import { User } from '../../models/user.model';
import { MyList } from '../../models/myList.model';
import { UsersListService } from 'src/app/services/user-service.service';
import { SearchPipe } from 'src/app/pipes/search-pipe.pipe';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ SearchPipe ]
})
export class UsersComponent implements OnInit{
    users: MyList<User>;
    search!: string;

    constructor(private usersListService: UsersListService) { 
        this.users = this.usersListService.getUsersList();
        console.log("USERS:", this.users);   
    }

  
  ngOnInit(): void {
      //console.log("USERS:", this.users)
  }
}
  
