import { Component, OnInit } from '@angular/core';
import { User, USER_MOCKS } from '../user';
import {AssociateService} from '../associate.service';
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
  trainers: Trainer[]=[];
  selectedTrainer: Trainer;
  selectedUser: User;
  clicked: boolean=true;



  constructor(private userService: AssociateService, private router: Router) { }

  ngOnInit() {
    this.populateUsers();
    this.populateTrainers();
    
  }

  trainerLogin(): void {
    console.log(this.selectedTrainer);
    this.clicked = false;
    this.router.navigate(['trainer-homepage']);
  }
  userLogin(): void {
    console.log(this.selectedUser);
  }

  async populateUsers() {
    this.users = await this.userService.promiseGetAllUsers();
    console.log(this.users);
  }

  async populateTrainers(){
    this.trainers = await this.userService.getAllTrainerInfo();
    console.log(this.trainers);
  }


}
