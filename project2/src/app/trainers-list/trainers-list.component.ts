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
    this.addNewTrainer('Adam','King','Virginia','Java Angular Full Stack');
    this.addNewTrainer('Jane', 'Doe', 'Florida', 'SalesForce');
    this.addNewTrainer('Barney', 'Calhoun', 'Florida', 'Cybersecurity');
    this.addNewTrainer('Gordon', 'Freeman', 'West Virginia', 'C# Full Stack');
    this.addNewTrainer('Andrew', 'QcGuy', 'Virginia', 'Java React Full Stack');
    this.addNewTrainer('Alyx', 'Vance', 'Texas', 'Cybersecurity');
    this.addNewTrainer('Kurt', 'Cobain', 'West Virginia', 'Business Analyst');
    this.addNewTrainer('Krist', 'Novoselic', 'Florida', 'Java Angular Full Stack');
    this.addNewTrainer('Dave', 'Grohl', 'Texas', 'Java React Full Stack');
    // this.addNewTrainer('Adam','King');
    // this.addNewTrainer('Jane', 'Doe');
  }

  addNewTrainer(newFirstName : string, newLastName : string, newLocation : string, newCurriculum : string){
    // addNewTrainer(newFirstName : string, newLastName : string){
    this.trainerArray.push(new Trainer(newFirstName , newLastName, newLocation, newCurriculum ));
    // this.trainerArray.push(new Trainer(newFirstName , newLastName));

  }
}
