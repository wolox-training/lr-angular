import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"

import { RegisterUserService } from 'src/app/services/register-user.service';
import {inputLogin} from './constants.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  post: any;
  messageAlert: string = 'Campo obligatorio';
  inputData: string = inputLogin;

  constructor( private fb: FormBuilder, private registerUserService: RegisterUserService, private router: Router ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.registerForm = this.fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])],
      'passwordConfirmation': [null, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])]
    });
  }

  addPost() {

    const data = {
          password_confirmation: this.registerForm.value.passwordConfirmation,
          first_name: this.registerForm.value.firstName,
          last_name: this.registerForm.value.lastName,
          locale: "en",
          ...this.registerForm.value
    }

    this.registerUserService.userRegister(data).subscribe(responsePost => console.log('Succesfull', responsePost) );
    this.router.navigateByUrl('/login')
  }

}
