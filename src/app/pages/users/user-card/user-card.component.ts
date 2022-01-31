import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User | null = null;
  
  showTodos = false;
  
  constructor() { }

  ngOnInit(): void {}

  clickTodos(){
    this.showTodos = !this.showTodos; 
    console.log("SHOWTODOS");
  }
}
