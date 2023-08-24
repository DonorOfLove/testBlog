import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {isAuth} from "../../services/isAuth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent{
  isAuthenticated: boolean;

  constructor(private router: Router,public isAuth:isAuth) { }

  onLogin():void {
    this.router.navigate(['/login']);
  }

  onLogout():void {
    this.router.navigate(['/login']);
    this.isAuth.isAuth=false
  }

  onRegister():void {
    this.router.navigate(['/register']);
  }
}

