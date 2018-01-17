import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from '../services/user/authorization.service';
import { Router } from '@angular/router';

@Injectable()
export class InlogGuard implements CanActivate {
  constructor(private auth : AuthorizationService, private router:Router){

  }
  canActivate(){
    if( this.auth.getActiveUser() != null){
      return true
    } else {
      alert("Niet ingelogd!")
      this.router.navigate(['/login']);
      return false
    }
  }
}
