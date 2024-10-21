import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn) {

    return true;
    
  } else {
    
    window.location.href = '/login'
    return false;
  }
};
