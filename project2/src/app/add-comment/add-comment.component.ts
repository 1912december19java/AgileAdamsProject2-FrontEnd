import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  comment = {
    id: 1,
    trainer_id: 1,
    user_id: 2,
    date_posted: Date.now(),
    comment_text: ""
  };

  constructor() { }

  ngOnInit() {
  }

  saveComment(): void {
    alert("Your Comment is being sent to the DB");
    // this.myService.saveComment(this.comment);
    this.resetCommentForm();
  }

  resetCommentForm() {
    this.comment.id = null;
    this.comment.trainer_id = null;
    this.comment.user_id = null;
    this.comment.date_posted = null;
    this.comment.comment_text = "";
  }

}
