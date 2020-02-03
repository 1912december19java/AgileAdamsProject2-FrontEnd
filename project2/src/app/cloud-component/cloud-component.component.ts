import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';


@Component({
  selector: 'app-cloud-component',
  template: `
  <div>
    <angular-tag-cloud
      [data]="data"
      (clicked)="logClicked($event)"
      [width]="options.width"
      [height]="options.height"
      [overflow]="options.overflow">
    </angular-tag-cloud>
  </div>
`
})
export class CloudComponentComponent implements OnInit {


  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 1,
    height: 400,
    overflow: false,
  };

  //Should be moved to a separate model component
  data: CloudData[] = [
    {text: 'Weight-8-link-color', weight: 8, color: '#ffaaee'},
    {text: 'Weight-10-link', weight: 10},
    // ...
  ];

  logClicked( event: any){
    console.log("You clicked the thing");
  }

  constructor() { }

  ngOnInit() {
  }

}
