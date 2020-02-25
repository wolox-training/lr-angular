import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from  './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component'


const routes: Routes = [ 
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: '', 
    redirectTo: 'register', 
    pathMatch: 'full'
  }, 
  {
    path: 'login', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
