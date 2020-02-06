import { Component, OnInit, Input, Output } from '@angular/core';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-trainer-approval-comment',
  templateUrl: './trainer-approval-comment.component.html',
  styleUrls: ['./trainer-approval-comment.component.css']
})
export class TrainerApprovalCommentComponent implements OnInit {

  @Input()
  testName : string = "bobby B";
  
  @Input()
  testComment : string = "god this cat is gonna destroy my computer soon";
  
  @Input()
  testDate : string = "1/1/1";

  status : string = "pending";


  constructor(private associateService : AssociateService) { }

  ngOnInit() {

  }

  approve(){
    console.log("APPROVED");
    this.status = "approved";
    this.associateService.updateComment('Hello from VS', '02-02-2020', 'approved');
    
  }

  delete(){
    console.log("DELETED");
    this.status = "deleted";
  }

}
