import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { UserService } from '../../services/user/user.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.css']
})
export class RegistrerenComponent {
  form : FormGroup
  user:User = new User();

  constructor(private userService: UserService, private fb : FormBuilder) {
    this.createForm();
   }

   createForm(){
    this.form = this.fb.group({
      voornaam: ['', Validators.required],
      achternaam: ['', Validators.required],
      email: ['', Validators.required],
      wachtwoord: ['', Validators.required],
      bwachtwoord:['', Validators.required]
    });
   }

  registreer(){
    this.userService.registreer(this.user);
  }

}
