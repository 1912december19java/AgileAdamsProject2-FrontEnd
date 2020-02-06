import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Trainer } from './trainer'
import { Word } from './word'
import { Router } from '@angular/router';
import { CommentClass } from './comment-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient, private router: Router) { }

  //THESE WILL SAVE THE STATE OF YOUR LOGIN AND CAN BE USED IF YOU PASS THIS SERVICE THROUGH TO YOUR CONSTRUCTOR
  public isLoggedIn: boolean = false;
  public loggedInUser: User = new User('','','','',null);
  public loggedInTrainer: Trainer = new Trainer('','','','','','',null);
  public currentWordSet : any[];
  public word: Word = new Word('');
  public targetTrainer : Trainer = new Trainer('','','','','','',null);


  async promiseGetAllUsers(): Promise<User[]> {
    console.log("promiseGetAllUsers()")
    return await this.http.get<User[]>('http://13.59.142.116:8085/project2/associates/')
    .toPromise();
    
  }

  async promiseGetAllTrainers(): Promise<Trainer[]> {
    return await this.http.get<Trainer[]>('http://13.59.142.116:8085/project2/trainers/').toPromise();
  }

  async getAllTrainerInfo() {
    console.log("getAllTrainerInfo()") 
    return await this.http.get<Trainer[]>("http://13.59.142.116:8085/project2/trainers")
    .toPromise();
   }

   attemptLogInAsUser(username: string, passcode: string, firstName: string, lastName: string, picture: File) {
    const loggingInAsUser = new User(username, passcode, firstName, lastName, picture);
    console.log(loggingInAsUser.username);
    this.http.get(`http://13.59.142.116:8085/project2/associates/${username}`)
        .subscribe((response: boolean)=>{
          if(response) {
            this.isLoggedIn = true;
            this.loggedInUser = loggingInAsUser;
            console.log(this.loggedInUser)
            this.router.navigate(['userpage'])
          } else {
            this.isLoggedIn = false;
            this.loggedInUser = new User('','','','',null);
          }
        });
  }
  attemptLogInAsTrainer(username: string, password: string, firstName: string, lastName: string, location: string, curriculum: string, picture: File) {
    const loggingInAsTrainer = new Trainer(username, password, firstName, lastName, location, curriculum, picture);
    console.log("attemptLogInAsTrainer()" + loggingInAsTrainer.username)
    this.http.get(`http://13.59.142.116:8085/project2/trainers/${loggingInAsTrainer.username}`)
    .subscribe((response: boolean)=>{
      if(response) {
        this.isLoggedIn = true;
        this.loggedInTrainer = loggingInAsTrainer;
        this.targetTrainer = loggingInAsTrainer;
        console.log(this.loggedInTrainer)
        this.router.navigate(['trainer-homepage'])
      } else {
        this.isLoggedIn = false;
        this.loggedInTrainer = new Trainer('','','','','','',null);
      }
    });
  }

   addWord(word : string) {
    console.log("addWord()") 
    const words = new Word(word);
    this.http.post("http://13.59.142.116:8085/project2/words/addWord", words)
    .subscribe((response: Word[])=>{
      this.word = words;
      console.log(response);
      console.log("test");
    })
   }

   attemptLogIn(username: string, password: string, location: string, curriculum: string) {
    const loggingInAsTrainer = new Trainer(username, password, location, curriculum);
    this.http.post('http://13.59.142.116:8085/project2/trainers/login', loggingInAsTrainer)
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
    this.loggedInUser = new User('','','','',null);
    this.loggedInTrainer = new Trainer('','','','','','',null);
    this.targetTrainer = new Trainer('','','','','','',null);
    this.router.navigate(['login'])
  }

  async getWordsByTrainer(username : string) : Promise<any[]>{
    return await this.http.get<any[]>(`http://13.59.142.116:8085/project2/words/trainer/wCount/${username}`).toPromise(); 
  }

  async getCommentsByTrainer(username : string) : Promise<CommentClass[]>{
    return await this.http.get<CommentClass[]>(`http://13.59.142.116:8085/project2/comments/byTrainer/${username}`).toPromise();
  }
  
  postNewComment(newComment : CommentClass) : Observable<CommentClass>{
    return this.http.post<CommentClass>('http://13.59.142.116:8085/project2/comments/addComment', newComment);
  }

  setSelectedTrainer(trainer : Trainer) : void{
    this.targetTrainer.firstName = trainer.firstName;
    this.targetTrainer.lastName = trainer.lastName;
    this.targetTrainer.passcode = trainer.passcode;
    this.targetTrainer.picture = trainer.picture;
    this.targetTrainer.location = trainer.location;
    this.targetTrainer.curriculum = trainer.curriculum;
    this.targetTrainer.username = trainer.username;
  }
}
