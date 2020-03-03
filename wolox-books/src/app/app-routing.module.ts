import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from  './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component';
import { ListBooksComponent } from './screens/list-books/list-books.component';
import { AuthComponent } from './components/auth/auth.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { UnauthGuard } from './guards/unauth.guard';
import { BookDetailComponent } from './screens/list-books/screens/book-detail/book-detail.component';


const routes: Routes = [ 
  {
    path: '', 
    redirectTo: 'unauth', 
    pathMatch: 'full'
  },
  {
    path: '', 
    component: AuthComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: 'books', component: ListBooksComponent},
      { path: 'books/:id', component: BookDetailComponent}
    ]
  },
  {
    path: 'unauth',
    component: UnauthComponent,
    canActivate: [UnauthGuard],
    children: [
      { path: '', component: LoginComponent},
      { path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
