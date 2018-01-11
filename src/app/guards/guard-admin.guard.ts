import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from '../services/user/authorization.service';
import { Router } from '@angular/router';

@Injectable()
export class GuardAdminGuard implements CanActivate {

  constructor(private auth : AuthorizationService, private router:Router){

  }

  canActivate(){
    console.log("guard");
    if(this.auth.getActiveUser() != null && this.auth.getActiveUser().admin == true){
      return true;
    } else {
      alert("Niet bevoegd!")
      this.router.navigate(['/producten']);
      return false;
    }
  }
}
