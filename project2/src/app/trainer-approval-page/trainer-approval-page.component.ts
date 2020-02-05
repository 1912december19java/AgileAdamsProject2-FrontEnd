import { Component, OnInit } from '@angular/core';
import { CommentClass } from '../comment-class';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-trainer-approval-page',
  templateUrl: './trainer-approval-page.component.html',
  styleUrls: ['./trainer-approval-page.component.css']
})
export class TrainerApprovalPageComponent implements OnInit {

  commentArray : CommentClass[] = [];

  constructor(private httpService : AssociateService) { }

  ngOnInit() {
    this.populatePendingComments();
  }

  addNewComment(newName : string, newText : string, newDate : string){
    this.commentArray.push(new CommentClass(newName, newText, newDate));
  }

  async populatePendingComments(){

    let tempComments = await this.httpService.getCommentsByTrainer('aking');

    for(let comment of tempComments){
      if (comment.approval === 'pending'){
        this.commentArray.push(comment);
      }
    }

  }
}
