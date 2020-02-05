import { Component, OnInit } from '@angular/core';
import { User, USER_MOCKS } from '../user';
import {AssociateService} from '../associate.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  constructor(private service: AssociateService,) { }

  ngOnInit() {
    this.populateUsers();
    
  }

  processUserLogin(event, user: User): void {
    this.service.attemptLogInAsUser(user.username, user.passcode, user.firstName, user.lastName, user.picture);
  }

  async populateUsers() {
    this.users = await this.service.promiseGetAllUsers();
    console.log(this.users);
  }


}
