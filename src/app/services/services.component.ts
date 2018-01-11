import { NgModule, Component } from '@angular/core';

import { AuthorizationService } from './user/authorization.service';
import { ApiService } from './api/api.service';
import { UserService } from './user/user.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css'],
  })
  
export class ServicesComponent { 
    constructor(){
        console.log("constructor ran-->")
    }
}
