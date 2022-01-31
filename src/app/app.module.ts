import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { HeaderComponent } from './pages/header/header.component';
import { UserCardComponent } from './pages/users/user-card/user-card.component';
import { TodoCardComponent } from './pages/todo-list/todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    TodoListComponent,
    HeaderComponent,
    UserCardComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
