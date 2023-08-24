import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent {
  constructor(private fb: FormBuilder, private router: Router,) {
  }
  registerForm:FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  register():void {
    if (this.registerForm.invalid) {
      return;
    }
    const email = this.registerForm.get('email')!.value as string
    const password = this.registerForm.get('password')!.value as string;
    if (localStorage.getItem(email)) {
      alert('email alredy exist')
    } else {
      localStorage.setItem(email, password);
      this.router.navigate(['/login']);
    }
  }
}
