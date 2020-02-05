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


  public isLoggedIn: boolean = false;
  // public loggedInTrainer: Trainer = new Trainer('','');
  public loggedInUser: User = new User('','','','','');
  public loggedInTrainer: Trainer = new Trainer('','','','');
  public currentWordSet : any[];


  async promiseGetAllUsers(): Promise<User[]> {
    return await this.http.get<User[]>('http://localhost:8080/Project2/associates/').toPromise();
  }

  getAllTrainerInfo() {
    console.log("getAllTrainerInfo()") 
    this.http.get("http://localhost:8080/Project2/trainers")
    .subscribe((response: Trainer[])=>{
      console.log(response);
      console.log("test")
    })
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
            this.loggedInUser = new User('','');
          }
        });
  }
  attemptLogInAsTrainer(username: string, password: string, location: string, curriculum: string) {
    const loggingInAsTrainer = new Trainer(username, password, location, curriculum);
    this.http.post('http://localhost:8081/trainers/login', loggingInAsTrainer.username)
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
