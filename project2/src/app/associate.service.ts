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
  public isTrainerLoggedIn: boolean = false;
  public isUserLoggedIn: boolean = false;
  // public isLoggedIn: boolean = false;
  public URI : string = 'http://13.59.142.116:8085/project2';
  //public URI : string = 'http://localhost:8080/Project2';
  public loggedInUser: User = new User('','','','',null);
  public loggedInTrainer: Trainer = new Trainer('','','','','','',null);
  public currentWordSet : any[];

  public targetTrainer : Trainer = new Trainer('','','','','','',null);
  public word: Word = new Word(this.targetTrainer, this.loggedInUser,'');
  public comment : CommentClass = new CommentClass(null,'','','');


  async promiseGetAllUsers(): Promise<User[]> {
    console.log("promiseGetAllUsers()")
    return await this.http.get<User[]>(`${this.URI}/associates/`)
    .toPromise();
    
  }

  async promiseGetAllTrainers(): Promise<Trainer[]> {
    return await this.http.get<Trainer[]>(`${this.URI}/trainers/`).toPromise();
  }

  async getAllTrainerInfo() {
    console.log("getAllTrainerInfo()") 
    return await this.http.get<Trainer[]>(`${this.URI}/trainers`)
    .toPromise();
   }

   attemptLogInAsUser(username: string, passcode: string, firstName: string, lastName: string, picture: File) {
    const loggingInAsUser = new User(username, passcode, firstName, lastName, picture);
    console.log(loggingInAsUser.username);
    this.http.get(`${this.URI}/associates/${username}`)
        .subscribe((response: boolean)=>{
          if(response) {
            this.isUserLoggedIn = true;
            this.loggedInUser = loggingInAsUser;
            console.log(this.loggedInUser)
            this.router.navigate(['userpage'])
          } else {
            this.isUserLoggedIn = false;
            this.loggedInUser = new User('','','','',null);
          }
        });
  }
  attemptLogInAsTrainer(username: string, password: string, firstName: string, lastName: string, location: string, curriculum: string, picture: File) {
    const loggingInAsTrainer = new Trainer(username, password, firstName, lastName, location, curriculum, picture);
    console.log("attemptLogInAsTrainer()" + loggingInAsTrainer.username)
    this.http.get(`${this.URI}/trainers/${loggingInAsTrainer.username}`)
    .subscribe((response: boolean)=>{
      if(response) {
        this.isTrainerLoggedIn = true;
        this.loggedInTrainer = loggingInAsTrainer;
        this.targetTrainer = loggingInAsTrainer;
        console.log(this.loggedInTrainer)
        this.router.navigate(['trainer-homepage'])
      } else {
        this.isTrainerLoggedIn = false;
        this.loggedInTrainer = new Trainer('','','','','','',null);
      }
    });
  }

  addWord(word : string) : Promise<object> {
    console.log("addWord()") ;
    const words = new Word(this.targetTrainer,this.loggedInUser,word);
    return this.http.post(`${this.URI}/words/addWord`, words)
        .toPromise();
   }
  
  logOut() {
    // this.isLoggedIn = false;
    this.isTrainerLoggedIn = false;
    this.isUserLoggedIn = false;
    this.loggedInUser = new User('','','','',null);
    this.loggedInTrainer = new Trainer('','','','','','',null);
    this.targetTrainer = new Trainer('','','','','','',null);
    this.router.navigate(['login'])
  }

  async getWordsByTrainer() : Promise<any[]>{
    console.log(this.targetTrainer.username);
    return await this.http.get<any[]>(`${this.URI}/words/trainer/wCount/${this.targetTrainer.username}`).toPromise(); 
  }

  async getCommentsByTrainer(username : string) : Promise<CommentClass[]>{
    console.log(this.targetTrainer.username);
    return await this.http.get<CommentClass[]>(`${this.URI}/comments/byTrainer/${this.targetTrainer.username}`).toPromise();
  }
  
  postNewComment(newComment : CommentClass) : Observable<CommentClass>{
    return this.http.post<CommentClass>(`${this.URI}/comments/addComment`, newComment);
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

  updateComment (comment : CommentClass){
    this.http.put(`${this.URI}/comments/${this.targetTrainer.username}`, comment)
    .subscribe((response: CommentClass[])=>{
      console.log(response);
    });

  }
  deleteComment (comment : CommentClass){
    console.log("From associateService: " + comment.id)
    this.http.delete(`${this.URI}/comments/${comment.id}`).subscribe();
    
  }
}
