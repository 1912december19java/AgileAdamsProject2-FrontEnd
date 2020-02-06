import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AssociateService } from '../associate.service';
import { CommentClass } from '../comment-class';
import { User } from '../user';
import { Trainer } from '../trainer';
import { faComment} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  faComment = faComment;

  comment = {
    trainer_username: this.httpService.targetTrainer,
    user_username: this.httpService.loggedInUser,
    date_posted: Date.now(),
    comment_text: "",
    id: 0
  };

  constructor(private httpService : AssociateService) { }

  ngOnInit() {
  }

  saveComment(): void {
    alert("Your Comment is being sent to the DB");
    // this.myService.saveComment(this.comment);
    this.sendComment();
    this.resetCommentForm();
  }

  resetCommentForm() {
    this.comment.trainer_username = null;
    this.comment.user_username = null;
    this.comment.date_posted = null;
    this.comment.comment_text = "";
  }

  sendComment(){
    this.comment.trainer_username = this.httpService.targetTrainer;
    this.comment.user_username = this.httpService.loggedInUser;
    this.comment.date_posted = Date.now();

    let newComment = new CommentClass(this.comment.id, this.comment.comment_text, (this.comment.date_posted).toString(), 'pending');
    newComment.userUser = new User();
    newComment.trainerUser = new Trainer();

    newComment.userUser = this.httpService.loggedInUser;
    newComment.trainerUser = this.httpService.targetTrainer;

    this.httpService.postNewComment(newComment).subscribe();
  }

}
