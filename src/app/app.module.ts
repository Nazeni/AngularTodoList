import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component'; 
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { HeaderComponent } from './pages/header/header.component';
import { UserCardComponent } from './pages/users/user-card/user-card.component';
import { TodoCardComponent } from './pages/todo-list/todo-card/todo-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersListService } from './services/user-service.service';
import { SearchPipe } from './pipes/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    TodoListComponent,
    HeaderComponent,
    UserCardComponent,
    TodoCardComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSpinnerModule
],
  providers: [UsersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
