import { Component, OnInit, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer} from '../trainer';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AssociateService } from '../associate.service';
import {Router} from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-trainer-table',
  templateUrl: './trainer-table.component.html',
  styleUrls: ['./trainer-table.component.css'],  
})
export class TrainerTableComponent {
  trainers: Trainer[] = [];
  trainers$: Observable<Trainer[]>;
  filter = new FormControl('');
  tempNumber: number = 10;
  photoConvert : string = "data:image/png;base64,";

  user: User = this.userService.loggedInUser;

  constructor(public userService: AssociateService, private router: Router) {  

  }

  ngOnInit() {
    this.populateTrainers();
       
  }

  async populateTrainers() {
    this.trainers = await this.userService.promiseGetAllTrainers();
    console.log(this.trainers);
    this.trainers$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))
    );
  }

  search(text: string): Trainer[] {
    return this.trainers.filter(trainer => {
      const term = text.toLowerCase();
      return trainer.lastName.toLowerCase().includes(term)
        || trainer.firstName.toLowerCase().includes(term)
        || trainer.location.toLowerCase().includes(term)
        || trainer.curriculum.toLowerCase().includes(term);
    });
  }

  goToTrainerPage(event, trainer : Trainer): void{
    this.userService.setSelectedTrainer(trainer);
    this.router.navigate(['/trainer-homepage']);
  }

}
