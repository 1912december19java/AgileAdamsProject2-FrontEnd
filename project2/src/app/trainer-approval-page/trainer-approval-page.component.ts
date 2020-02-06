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
  

  addNewComment(id: number, newName : string, newText : string, newDate : string){
    this.commentArray.push(new CommentClass(id, newName, newText, newDate));
  }

  async populatePendingComments(){

    let tempComments = await this.httpService.getCommentsByTrainer(this.httpService.targetTrainer.username);

    for(let comment of tempComments){
      if (comment.approval === 'pending'){
        this.commentArray.push(comment);
      }
    }
    console.log("These are the comments from trainer-approval-page: " + this.commentArray);

  }
}
