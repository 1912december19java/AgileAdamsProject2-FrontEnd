import { Component, OnInit } from '@angular/core';
import { CommentClass } from '../comment-class';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  commentArray : CommentClass[] = [];

  constructor() { }

  ngOnInit() {
    this.addNewComment('chopin', 'yummu yummy', '1/1/1');
    this.addNewComment('sunni', 'chasing mice', '1/1/1');
    this.addNewComment('madcat', 'i mad', '1/1/1');
    this.addNewComment('keith', 'cats can have a little salami', '1/1/1');
  }

  addNewComment(newName : string, newText : string, newDate : string){
    this.commentArray.push(new CommentClass(newName, newText, newDate));
  }

}
