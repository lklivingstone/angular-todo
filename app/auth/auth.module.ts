import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
