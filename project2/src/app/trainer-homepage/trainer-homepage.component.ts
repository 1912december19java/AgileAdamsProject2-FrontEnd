import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { AssociateService } from '../associate.service';
import { CloudData } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-trainer-homepage',
  templateUrl: './trainer-homepage.component.html',
  styleUrls: ['./trainer-homepage.component.css']
})
export class TrainerHomepageComponent implements OnInit {

  word: Word = new Word(this.service.targetTrainer, this.service.loggedInUser, '');
  isUserLoggedIn: boolean = false;
  data: CloudData[] =[];

  currentWords: any[];

  constructor(public service : AssociateService) { }

  ngOnInit() {
    this.gatherWords();
    this.checkIfUserLoggedIn();
  }

  checkIfUserLoggedIn(){
    if(this.service.isUserLoggedIn){
      this.isUserLoggedIn = true;
    }
  };

  async adWord(){
    //alert('your word has been added');  
    let responseFromAddWordPost = await this.service.addWord(this.word.word);
    
    
    this.resetWordForm();
    this.gatherWords();
  }

  resetWordForm() {
    this.word.word = '';
  }

  async gatherWords(){
    //Hardcode Adam's username aking
    this.currentWords = await this.service.getWordsByTrainer();
    const newData : CloudData[] = [];
    

    for( let pair of this.currentWords){
      console.log(`TEXT: ${pair[0]} | WEIGHT: ${pair[1]}`);
      newData.push(
        {text: pair[0], weight: pair[1]}
      );
    }
    this.data = newData;
    //console.log(await (await this.httpService.getWordsByTrainer('aking'))[0]);
  }

}
