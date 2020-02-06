import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../associate.service';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-trainer-home',
  templateUrl: './trainer-home.component.html',
  styleUrls: ['./trainer-home.component.css']
})
export class TrainerHomeComponent implements OnInit {

  constructor(public service: AssociateService) { }

  trainer: Trainer;

  ngOnInit() {
    this.trainer = this.service.targetTrainer;
  }


}
