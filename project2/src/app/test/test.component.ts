import { Component, OnInit } from '@angular/core';
// import { TrainerService } from '../trainer.service';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public associateService: AssociateService) { }

  ngOnInit() {

   this.associateService.getAllTrainerInfo();
  }

  


}
