import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "users", component: UsersComponent},
  {path: "todoList", component: TodoListComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent },
  {path: "",   redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
