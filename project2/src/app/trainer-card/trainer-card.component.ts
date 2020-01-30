import { Component, OnInit, Input } from '@angular/core';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent implements OnInit {


  @Input()
testFirstName : string = "";

@Input()
testLastName : string = "";

@Input()
testLocation : string = "";

@Input()
testCurriculum : string = "";



  constructor() { }

  ngOnInit() {
  }

}
