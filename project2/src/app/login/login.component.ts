import { Component, OnInit } from '@angular/core';
import { User, USER_MOCKS } from '../user';
import { Trainer } from '../trainer';
import {AssociateService} from '../associate.service';
import { stringify } from 'querystring';
import { Trainer } from '../trainer';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from '../app-routing.module'
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  trainers: Trainer[] = [];

  constructor(private service: AssociateService,) { }

  ngOnInit() {
    this.populateUsers();
    this.populateTrainers();
  }

  processUserLogin(event, user: User): void {
    this.service.attemptLogInAsUser(user.username, user.passcode, user.firstName, user.lastName, user.picture);
  }

  processTrainerLogin(event, trainer: Trainer): void {
    console.log("processTrainerLogin()")
    this.service.attemptLogInAsTrainer(trainer.username, trainer.password, trainer.firstName, trainer.lastName, trainer.location, trainer.curriculum);
  }

  async populateUsers() {
    this.users = await this.service.promiseGetAllUsers();
    console.log(this.users);
  }

  async populateTrainers(){
    this.trainers = await this.service.getAllTrainerInfo();
    console.log(this.trainers);
  }


}
