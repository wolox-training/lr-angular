import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from  './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component';
import { ListBooksComponent } from './screens/list-books/list-books.component'


const routes: Routes = [ 
  {
    path: '', 
    redirectTo: 'register', 
    pathMatch: 'full'
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'home', 
    component: ListBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
