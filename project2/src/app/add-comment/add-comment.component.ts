import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  comment = {
    trainer_username: 'aking',
    user_username: 'dking',
    date_posted: Date.now(),
    comment_text: ""
  };

  constructor(private httpService : AssociateService) { }

  ngOnInit() {
  }

  saveComment(): void {
    alert("Your Comment is being sent to the DB");
    // this.myService.saveComment(this.comment);
    this.resetCommentForm();
  }

  resetCommentForm() {
    this.comment.trainer_username = null;
    this.comment.user_username = null;
    this.comment.date_posted = null;
    this.comment.comment_text = "";
  }

  sendComment(){
    this.comment.trainer_username = 'aking';
    this.comment.user_username = 'dking';
    this.comment.date_posted = Date.now();
    this.httpService.postNewComment(this.comment);
  }

}
