import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {


  const isAdminLoggedIn = sessionStorage.getItem("isAdminLoggedIn");
  const userRole = sessionStorage.getItem("userRole");

  if (isAdminLoggedIn && userRole === "admin") {
    
    return true;
    
  } else {

    window.location.href = '/admin-login'
    return false
    
  }
};
