import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

class Login {
  constructor(
    public username: string = '',
    public password: string = ''
  ) { }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  model: Login = new Login();

  login!: Subscription;
  failure: boolean = false;

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  @ViewChild('loginForm') loginForm: any;

  ngOnDestroy(): void {
    this.failure = false;
    this.login.unsubscribe();
  }

  onSubmit() {
    this.login = this.authService
    .login(this.loginForm.value)
    .subscribe(response => {
      sessionStorage.setItem('token', response['accessToken']);
      this.failure = false;
      this.loginForm.resetForm();
      this.router.navigate(['/home']);
    }, error => {
      this.failure = true;
      console.log(error)
    });
  }
}
