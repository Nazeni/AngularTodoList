import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyList } from 'src/app/models/myList.model';
import { UsersListService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    users: MyList<User> ;
    registerForm! : FormGroup;

    constructor(private usersListService: UsersListService) {
      this.users = this.usersListService.getUsersList();
      
      this.registerForm = new FormGroup({
        id: new FormControl(Number(`${this.users.values.length + 1}`)),
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        password: new FormControl("", [ Validators.required, 
                                        Validators.minLength(6)
                                      ])
    });
    }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("BEFORE, USERS", this.users);
    if(this.registerForm.valid){
        this.users.add(this.registerForm.value);
        console.log(this.registerForm.value);
        this.registerForm.reset();
       console.log("AFTER, USERS", this.users);
    }
    console.log("REACTIVE FORM:", this.registerForm.value)
  }

}
