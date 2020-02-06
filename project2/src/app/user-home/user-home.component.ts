import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../associate.service';
import { User } from '../user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  
  user: User;

  constructor(public service: AssociateService,) { };

  ngOnInit() {
    this.user = this.service.loggedInUser;
  }

   

}
