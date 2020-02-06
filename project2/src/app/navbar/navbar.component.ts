import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../associate.service';
import { Router } from '@angular/router';
import { CommentClass } from '../comment-class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isTrainerLoggedIn: boolean = false;
  isUserLoggedIn: boolean = false;
  commentArray : CommentClass[] = [];

  constructor(public service: AssociateService, public router: Router, public httpService: AssociateService) { }

  ngOnInit() {
    this.checkIfTrainerLoggedIn();
    this.checkIfUserLoggedIn();
    console.log("Truthiness of trainer is: " + Boolean(this.isTrainerLoggedIn));
    console.log("Truthiness of user is: " + Boolean(this.isUserLoggedIn))
    this.populatePendingComments();
  };

  checkIfTrainerLoggedIn(){
    if(this.service.isTrainerLoggedIn){
      this.isTrainerLoggedIn = true;
    }
  };
  checkIfUserLoggedIn(){
    if(this.service.isUserLoggedIn){
      this.isUserLoggedIn = true;
    }
  };
  goToUserHomepage(){
    this.router.navigate(['userpage']);
  };
  goToTrainerHomepage(){
    this.router.navigate(['trainer-homepage']);
  };
  goToPendingCommentsPage(){
    this.router.navigate(['trainerapprovalpage']);
  };

  async populatePendingComments(){
    let tempComments = await this.httpService.getCommentsByTrainer(this.httpService.targetTrainer.username);
    for(let comment of tempComments){
      if (comment.approval === 'pending'){
        this.commentArray.push(comment);
      }
    }
  }

}
