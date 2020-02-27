import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { LoginService } from 'src/app/services/login.service';
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

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

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
    this.loginService.loginUser(this.loginForm.value)
      .subscribe(
          responsePost => { localStorage.setItem('token', JSON.stringify(responsePost))
          this.router.navigateByUrl('/books');
        }
      );
  }
}
