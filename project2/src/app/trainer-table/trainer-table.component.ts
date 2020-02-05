import { Component, OnInit, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer} from '../trainer';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AssociateService } from '../associate.service';

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

  constructor(public userService: AssociateService) {

  }

  ngOnInit() {
    this.populateTrainers();
  }

  async populateTrainers() {
    this.trainers = await this.userService.promiseGetAllTrainers();
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

}
