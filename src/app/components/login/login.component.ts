import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';
import { ApiService } from '../../services/api/api.service';
import { URLSearchParams } from "@angular/http"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();
  fout : boolean = false


  constructor(private userService:UserService, private apiService:ApiService) {
      console.log("Constructor ran...")
   }

  logIn() {
    
    this.fout = this.userService.login(this.user, false)
    console.log(this.fout)
  }
}
