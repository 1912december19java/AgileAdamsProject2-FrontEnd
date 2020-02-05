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

  constructor(private httpService : AssociateService) { }

  ngOnInit() {
    this.populateResolvedComments();
  }

  addNewComment(newText : string, newDate : string, newApproval : string){
    this.commentArray.push(new CommentClass(newText, newDate, newApproval));
  }

  async populateResolvedComments(){
    let tempComments = await this.httpService.getCommentsByTrainer('aking');
    for(let comment of tempComments){
      if(comment.approval !== 'pending'){
        this.commentArray.push(comment);
      }
    }
  }
}
