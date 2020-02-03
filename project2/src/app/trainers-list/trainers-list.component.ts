import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
// import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainers-list',
  templateUrl: './trainers-list.component.html',
  styleUrls: ['./trainers-list.component.css']
})
export class TrainersListComponent implements OnInit {


  trainerArray : Trainer[] = [];
  
  constructor() { }

  ngOnInit() {
    this.addNewTrainer('Adam','King','Virginia','Java');
    this.addNewTrainer('Jane', 'Doe', 'Washington DC', 'SQL');
    // this.addNewTrainer('Adam','King');
    // this.addNewTrainer('Jane', 'Doe');
  }

  addNewTrainer(newFirstName : string, newLastName : string, newLocation : string, newCurriculum : string){
    // addNewTrainer(newFirstName : string, newLastName : string){
    this.trainerArray.push(new Trainer(newFirstName , newLastName, newLocation, newCurriculum ));
    // this.trainerArray.push(new Trainer(newFirstName , newLastName));

  }
}
