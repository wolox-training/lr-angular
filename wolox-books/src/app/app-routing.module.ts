import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from  './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component'


const routes: Routes = [
  {
    path: '', 
    component: AppComponent
  },  
  {
    path: 'sing-up', 
    component: RegisterComponent
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
