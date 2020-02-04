import { Component, OnInit } from '@angular/core';
import { User, USER_MOCKS } from '../user';
import {AssociateService} from '../associate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: AssociateService,) { }

  ngOnInit() {
    this.populateUsers();
    
  }

  processLogin(): void {
    alert('login Works');
  }

  async populateUsers() {
    this.users = await this.userService.promiseGetAllUsers();
    console.log(this.users);
  }


}
