import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/user/authorization.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth : AuthorizationService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.deleteAuthorization();
  }

}
