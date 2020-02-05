import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-trainer-homepage',
  templateUrl: './trainer-homepage.component.html',
  styleUrls: ['./trainer-homepage.component.css']
})
export class TrainerHomepageComponent implements OnInit {

  

  constructor(public service : AssociateService) { }

  ngOnInit() {
  }

  adWord(){    
    this.service.addWord();
  }

}
