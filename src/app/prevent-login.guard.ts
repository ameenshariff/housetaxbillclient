import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Route,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';
import { MainPageComponent } from './main-page/main-page.component';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.auth.isUserValid()) {
      return true;
    }
    else {
      // alert("Please")
      this.router.navigate(["/homepage"]);

      return false;
    }


  }
}
