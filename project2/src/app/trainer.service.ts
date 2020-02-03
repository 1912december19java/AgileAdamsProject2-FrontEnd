import { Injectable } from '@angular/core';
import { Trainer } from './trainer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http:HttpClient) { }

  public isLoggedIn: boolean = false;
  public loggedInTrainer: Trainer = new Trainer('','');

  attemptLogIn(username: string, password: string) {
    const loggingInAsTrainer = new Trainer(username, password);
    this.http.post('http://localhost:8081/trainers/login', loggingInAsTrainer)
        .subscribe((response: boolean)=>{
          if(response) {
            this.isLoggedIn = true;
            this.loggedInTrainer = loggingInAsTrainer;
          } else {
            this.isLoggedIn = false;
            this.loggedInTrainer = new Trainer('','');
          }
        });
  }

  logOut() {
    this.isLoggedIn = false;
    this.loggedInTrainer = new Trainer('','');
  }

  
  
}
