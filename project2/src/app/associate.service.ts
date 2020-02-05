import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Trainer } from './trainer'
import { Word } from './word'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient, private router: Router) { }

  //THESE WILL SAVE THE STATE OF YOUR LOGIN AND CAN BE USED IF YOU PASS THIS SERVICE THROUGH TO YOUR CONSTRUCTOR
  public isLoggedIn: boolean = false;
  public loggedInUser: User = new User('','','','','');
  public loggedInTrainer: Trainer = new Trainer('','','','','','');
  public currentWordSet : any[];


  async promiseGetAllUsers(): Promise<User[]> {
    return await this.http.get<User[]>('http://localhost:8080/Project2/associates/').toPromise();
  }

  async getAllTrainerInfo(): Promise<Trainer[]> {
    console.log("getAllTrainerInfo()") 
    return await this.http.get<Trainer[]>("http://localhost:8080/Project2/trainers")
    .toPromise();
   }

   attemptLogInAsUser(username: string, passcode: string, firstName: string, lastName: string, picture: string) {
    const loggingInAsUser = new User(username, passcode, firstName, lastName, picture);
    console.log(loggingInAsUser.username);
    this.http.get(`http://localhost:8080/Project2/associates/${username}`)
        .subscribe((response: boolean)=>{
          if(response) {
            this.isLoggedIn = true;
            this.loggedInUser = loggingInAsUser;
            console.log(this.loggedInUser)
            this.router.navigate(['userpage'])
          } else {
            this.isLoggedIn = false;
            this.loggedInUser = new User('','','','','');
          }
        });
  }
  attemptLogInAsTrainer(username: string, password: string, firstName: string, lastName: string, location: string, curriculum: string) {
    const loggingInAsTrainer = new Trainer(username, password, firstName, lastName, location, curriculum);
    console.log("attemptLogInAsTrainer()" + loggingInAsTrainer.username)
    this.http.get(`http://localhost:8080/Project2/trainers/${loggingInAsTrainer.username}`)
        .subscribe((response: boolean)=>{
          if(response) {
            this.isLoggedIn = true;
            this.loggedInTrainer = loggingInAsTrainer;
            console.log(this.loggedInTrainer)
            this.router.navigate(['trainer-homepage'])
          } else {
            this.isLoggedIn = false;
            this.loggedInTrainer = new Trainer('','','','','','');
          }
        });
  }
  logOut() {
    this.isLoggedIn = false;
    this.loggedInUser = new User('','','','','');
    this.loggedInTrainer = new Trainer('','','','','','');
    this.router.navigate(['login'])
  }

  async getWordsByTrainer(username : string) : Promise<any[]>{
    return await this.http.get<any[]>(`http://localhost:8080/Project2/words/trainer/wCount/${username}`).toPromise(); 
  }
  
}





// attemptLogInAsUser(username: string, passcode: string, firstName: string, lastName: string, picture: string) {
//   const loggingInAsUser = new User(username, passcode, firstName, lastName, picture);
//   console.log(loggingInAsUser.username);
//   this.http.post(`http://localhost:8080/Project2/associates/${username}`, loggingInAsUser.username)
//       .subscribe((response: boolean)=>{
//         if(response) {
//           this.isLoggedIn = true;
//           this.loggedInUser = loggingInAsUser;
//           this.router.navigate(['userpage'])
//         } else {
//           this.isLoggedIn = false;
//           this.loggedInUser = new User('','');
//         }
//       });
// }
