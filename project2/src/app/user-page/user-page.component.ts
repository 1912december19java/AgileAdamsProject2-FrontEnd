import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users: User = {
    firstName: "John",
    lastName: "Doe"
  }

  constructor( ) { }

  ngOnInit() {
    this.getUserInfo()
  }

  getUserInfo(){
    //TODO: Get user info from a model. User information is currently gotten from a local object.
  }



}
