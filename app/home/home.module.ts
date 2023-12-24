import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    // NavbarComponent
    // HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
