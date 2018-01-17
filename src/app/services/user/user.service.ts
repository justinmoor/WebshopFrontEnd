import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service';
import { AuthorizationService } from '../../services/user/authorization.service';

import { User } from '../../models/user';

@Injectable()
export class UserService{
    constructor(
    private api: ApiService,
    private authService: AuthorizationService,
    private router:Router
    )
{

}

public registreer(user:User){
    let data = {
        voornaam : user.voornaam,
        achternaam : user.achternaam,
        email : user.email,
        wachtwoord : user.wachtwoord
    }

    this.api.registreer(data).subscribe(data =>{
        alert("Gelukt");
    },
    error => {
        alert("Mislukt");
    });
}

public login(user:User, remember:boolean):boolean{
    this.authService.setAuthorization(user.email, user.wachtwoord);

    this.api.getLogin<User>('user/login').subscribe(
        authenticator => {
            this.authService.storeAuthorization(authenticator, remember);
            sessionStorage.setItem('activeUser', JSON.stringify(authenticator));
            this.goHome();
            return false;
        },
        error => {
            return true
        }
    )

    return true
}

public getAll(): Observable<User[]>{
    return this.api.getUsers<User[]>();
}

private goHome() {
    this.router.navigate(['/producten']);
}

}