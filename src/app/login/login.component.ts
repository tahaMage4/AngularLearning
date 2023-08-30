import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Login } from '../types/data.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private login: LoginService, private router: Router) {}

  //* Normall Way
  Login(data: Login): void {
    console.log(data);
    // this.login.userLogin(data);

    //! https way
    this.login.userLogin(data).subscribe((result) => {
      console.log(result);
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
