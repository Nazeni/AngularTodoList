import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersListService } from 'src/app/services/user-service.service';
import { MyList } from 'src/app/models/myList.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    users: MyList<User>;
    constructor(private userListServise: UsersListService,
                    private router: Router,
                    private SpinnerService: NgxSpinnerService) {
        this.users = this.userListServise.getUsersList();
    }

    ngOnInit(): void {
    }

    login = {
        email: "",
        password: ""
    }

    OnSubmit(form:NgForm){
        setTimeout(this.formSubmit, 3000)
        
    }  
    
    formSubmit(form:NgForm){
        console.log("FORM:", form);
        console.log("USERS", this.users);
        this.SpinnerService.show();
        if (this.users.values.find((item) => 
            item.email == form.controls['email'].value &&
            item.password == form.controls['password'].value)) {
                //this.SpinnerService.hide();
                this.router.navigate(['home']);
                console.log("NAVIGATE");

            }else{
                alert("Incorrect Email or Password");
            }
    }
}
