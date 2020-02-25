import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import {inputLogin} from './constants.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  messageAlert: string = 'Campo obligatorio';
  inputDataLogin: string = inputLogin;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.loginForm = this.fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])]
    });
  }

  loginPost() {
    const data = {
          password_confirmation: this.loginForm.value.passwordConfirmation,
          first_name: this.loginForm.value.firstName,
          last_name: this.loginForm.value.lastName,
          locale: "en",
          ...this.loginForm.value
    }

    this.registerUserService.userRegister(data).subscribe(responsePost => console.log('Succesfull', responsePost) );
    this.router.navigateByUrl('/login')
  }
}
