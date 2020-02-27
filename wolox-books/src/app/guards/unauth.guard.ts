import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const verifyToken = this.loginService.getLocalStorage();

      // console.log(next);
      // console.log(state);
      // return verifyToken ? true : (this.router.navigateByUrl('/unauth'), false);



      const currentUser = this.loginService.getLocalStorage();

    if(!currentUser){
      console.log(currentUser);
      //this.router.navigateByUrl('/books');
      return true;
    }
    else{
      this.router.navigateByUrl('/books');
      return false;
    }
  }
}
