import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.css']
})
export class KlantenComponent implements OnInit {

  users: User[]
  public searchString:string;

  constructor(private userService: UserService) {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

}
