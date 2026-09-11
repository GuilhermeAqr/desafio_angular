import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const Auth = inject(auth)
  const router =inject(Router)

  if(Auth.estaLogado()){
  return true;
  }
  
  router.navigate(["/login"])
  return false;
};
