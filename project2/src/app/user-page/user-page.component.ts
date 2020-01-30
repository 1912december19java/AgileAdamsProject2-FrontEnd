import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users: Object = {
    userFirstName: "John",
    userLastName: "Doe"
  }

  constructor() { }

  ngOnInit() {
    this.getUserInfo()
  }

  getUserInfo(){
    //TODO: Get user info from a model. User information is currently gotten from a local object.
  }



}
