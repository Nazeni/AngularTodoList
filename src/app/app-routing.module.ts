import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "users", component: UsersComponent},
  {path: "todoList", component: TodoListComponent},
  {path: "",   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
