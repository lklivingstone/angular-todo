import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private router: Router
    ) { }

  onSubmit() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
    // this.router.navigate(['/login'], {
    //   queryParams: { page: 1, per_page: 10 },
    // });
  }
}