import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Trainer } from './trainer'
import { Word } from './word'
import { CommentClass } from './comment-class';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient) { }


  public isLoggedIn: boolean = false;
  // public loggedInTrainer: Trainer = new Trainer('','');
  public loggedInTrainer: Trainer = new Trainer('','','','');
  public currentWordSet : any[];


  async promiseGetAllUsers(): Promise<User[]> {
    console.log("promiseGetAllUsers()")
    return await this.http.get<User[]>('http://localhost:8080/Project2/associates/')
    .toPromise();
    
  }

  async getAllTrainerInfo(): Promise<Trainer[]> {
    console.log("getAllTrainerInfo()") 
    // this.http.get<Trainer[]("http://localhost:8080/Project2/trainers")
    // .subscribe((response: Trainer[])=>{
    //   console.log(response);
    //   console.log("test")
    //   return response: Trainer[];
    // })
    return await this.http.get<Trainer[]>("http://localhost:8080/Project2/trainers")
    .toPromise();
   }

   attemptLogIn(username: string, password: string, location: string, curriculum: string) {
    const loggingInAsTrainer = new Trainer(username, password, location, curriculum);
    this.http.post('http://localhost:8080/trainers/login', loggingInAsTrainer)
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

  async getCommentsByTrainer(username : string) : Promise<CommentClass[]>{
    return await this.http.get<CommentClass[]>(`http://localhost:8080/Project2/comments/byTrainer/${username}`).toPromise();
  }
  
}



