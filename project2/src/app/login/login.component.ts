import { Component, OnInit } from '@angular/core';
import { User, USER_MOCKS } from '../user';
import { AssociateService } from '../associate.service';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  trainers: Trainer[] = [];

  imageConvert: string = "data:image/png;base64,";

  constructor(private userService: AssociateService, ) { }

  ngOnInit() {
    this.populateUsers();
    this.populateTrainers();
  }

  processLogin(): void {
    alert('login Works');
  }

  async populateUsers() {
    this.users = await this.userService.promiseGetAllUsers();
  }

  async populateTrainers() {
    this.trainers = await this.userService.promiseGetAllTrainers();
  }


}
