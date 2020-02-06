import { Component, OnInit } from '@angular/core';
import { CommentClass } from '../comment-class';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  commentArray : CommentClass[] = [];
  isUserLoggedIn: boolean = false;

  constructor(private httpService : AssociateService) { }

  ngOnInit() {
    this.populateResolvedComments();
    this.checkIfUserLoggedIn();
  }
/*
  addNewComment(newText : string, newDate : string, newApproval : string){
    this.commentArray.push(new CommentClass(newText, newDate, newApproval));
  }
  */

  checkIfUserLoggedIn(){
    if(this.httpService.isUserLoggedIn){
      this.isUserLoggedIn = true;
    }
  };

  async populateResolvedComments(){
    let tempComments = await this.httpService.getCommentsByTrainer(this.httpService.targetTrainer.username);
    for(let comment of tempComments){
      if(comment.approval !== 'pending'){
        this.commentArray.push(comment);
      }
    }
  }
}
