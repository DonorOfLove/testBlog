import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {isAuth} from "../../services/isAuth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private isAuth: isAuth) {
  }

  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit():void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value as string
      const password = this.loginForm.get('password')!.value as string;
      if (localStorage.getItem(email) == password) {
        this.isAuth.isAuth = true
        this.router.navigate(['/posts']);
      }else{
        alert('no much')
      }
    }
  }
}
