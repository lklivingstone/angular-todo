import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('token') === null) {
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
  else {
    return true;
  }
};
