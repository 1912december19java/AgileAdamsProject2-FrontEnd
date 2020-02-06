import { Component, OnInit, Input } from '@angular/core';
import { CloudData, CloudOptions, ZoomOnHoverOptions } from 'angular-tag-cloud-module';
import { AssociateService } from '../associate.service';



@Component({
  selector: 'app-cloud-component',
  template: `
  <div>
    <angular-tag-cloud
      [(data)]="data"
      style="cursor: pointer"
      [zoomOnHover]="zoomOnHoverOptions"
      (clicked)="logClicked($event)"
      [width]="options.width"
      [height]="options.height"
      [overflow]="options.overflow">
    </angular-tag-cloud>
  </div>
`
})
export class CloudComponentComponent implements OnInit {

  currentWords : any[];

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3, // Elements will become 130 % of current zize on hover
    transitionTime: 1.2, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
    delay: 0 // Zoom will take affect after 0.8 seconds
  };

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 1,
    height: 400,
    overflow: false,
  };

  //Should be moved to a separate model component
  @Input()
  data: CloudData[] = [

  ];

  constructor(private httpService : AssociateService) { }

  async logClicked( event: any){
    console.log(event);
    let response = await this.httpService.addWord(event.text);
    this.gatherWords();
  }

  ngOnInit() {
    //this.gatherWords();
  }

  async gatherWords(){
    //Hardcode Adam's username aking
    this.currentWords = await this.httpService.getWordsByTrainer();
    const newData : CloudData[] = [];
    

    for( let pair of this.currentWords){
      //console.log(`TEXT: ${pair[0]} | WEIGHT: ${pair[1]}`);
      newData.push(
        {text: pair[0], weight: pair[1]}
      );
    }
    this.data = newData;
    //console.log(await (await this.httpService.getWordsByTrainer('aking'))[0]);
  }

}
