import { Component, OnInit } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  faComment = faComment;

  word = {
    id: 1,
    trainer_username: "dDuck",
    user_username: 'mmouse',
    word_text: "yourWord"
  };

  constructor() { }

  ngOnInit() {
  }

  saveWord(): void{
    alert("Your word is being sent to the DB");
    //this.myServerice.saveWord(this.word);
    this.resetWordForm();
  }

  resetWordForm(){
    this.word.trainer_username = "";
    this.word.user_username = "";
    this.word.word_text= "";
  }

}
