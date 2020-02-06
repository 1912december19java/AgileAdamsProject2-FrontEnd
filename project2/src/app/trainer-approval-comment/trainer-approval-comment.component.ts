import { Component, OnInit, Input, Output } from '@angular/core';
import { AssociateService } from '../associate.service';
import { CommentClass } from '../comment-class';

@Component({
  selector: 'app-trainer-approval-comment',
  templateUrl: './trainer-approval-comment.component.html',
  styleUrls: ['./trainer-approval-comment.component.css']
})
export class TrainerApprovalCommentComponent implements OnInit {

  @Input()
  testName : string = "bobby B";
  
  @Input()
  testComment : string = "god this cat is gonna destroy my computer soon";
  
  @Input()
  testDate : string = "1/1/1";

  @Input()
  dataComment : CommentClass;

  status : string = "pending";


  constructor(private associateService : AssociateService) { }

  ngOnInit() {

  }

  approve(){
    console.log("APPROVED");
    this.status = "approved";
    this.dataComment.approval = "approved"
    console.log(this.dataComment);
    // this.associateService.updateComment(commentArray.trainerUser, commentArray.userUser, commentArray.commentText, commentArray.datePosted, commentArray.approval);
    this.associateService.updateComment( this.dataComment);
  }

  delete(){
    console.log("From trainer-approval-comment: " + this.dataComment.commentText);
    this.status = "deleted";
    this.associateService.deleteComment(this.dataComment)
  }

}
