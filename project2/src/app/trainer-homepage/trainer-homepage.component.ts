import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-trainer-homepage',
  templateUrl: './trainer-homepage.component.html',
  styleUrls: ['./trainer-homepage.component.css']
})
export class TrainerHomepageComponent implements OnInit {

  word: Word = new Word(this.service.targetTrainer, this.service.loggedInUser, '');

  constructor(public service : AssociateService) { }

  ngOnInit() {
  }

  adWord(){
    alert('your word has been added');  
    this.service.addWord(this.word.word);
    this.resetWordForm();
  }

  resetWordForm() {
    this.word.word = '';
  }

}
