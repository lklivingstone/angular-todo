import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

class Signup {
  constructor(
    public username: string = '',
    public email: string = '',
    public password: string = ''
  ) { }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent implements OnDestroy {
  model: Signup = new Signup();
  registration!: Subscription;
  success: boolean = false;
  failure: boolean = false;
  failureMessages: string[] = [];

  @ViewChild('signupForm') signupForm: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    this.failureMessages = [];
    this.registration = this.authService
    .register(this.signupForm.value)
    .subscribe(response => {
      this.failureMessages = [];
      this.signupForm.resetForm();
      this.success = true;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }, error => {
      this.failure = true;
      if (error.error.keyPattern.hasOwnProperty('username')) {
        this.failureMessages.push('Username already exists');
      }
      if (error.error.keyPattern.hasOwnProperty('email')) {
        this.failureMessages.push('Email already exists');
      }
    });

  }

  ngOnDestroy(): void {
    this.failure = false;
    this.success = false;
    this.registration.unsubscribe();
    this.failureMessages = [];
  }
}
