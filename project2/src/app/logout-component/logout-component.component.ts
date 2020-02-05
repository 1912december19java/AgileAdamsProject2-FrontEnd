import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent implements OnInit {

  constructor(private Service: AssociateService) { }

  ngOnInit() {
  }

  logout(){
    this.Service.logOut();
  }

}
