import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

@Input()
testName : string = "bobby B";

@Input()
testComment : string = "god this cat is gonna destroy my computer soon";

@Input()
testDate : string = "1/1/1";

  constructor() { }

  ngOnInit() {
  }

}
