import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { AssociateService } from '../associate.service';


@Component({
  selector: 'app-cloud-component',
  template: `
  <div>
    <angular-tag-cloud
      [(data)]="data"
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

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 1,
    height: 400,
    overflow: false,
  };

  //Should be moved to a separate model component
  data: CloudData[] = [

  ];

  constructor(private httpService : AssociateService) { }

  logClicked( event: any){
    console.log(event);
    this.httpService.addWord(event.text);
  }

  ngOnInit() {
    this.gatherWords();
  }

  async gatherWords(){
    //Hardcode Adam's username aking
    this.currentWords = await this.httpService.getWordsByTrainer();
    const newData : CloudData[] = [];
    

    for( let pair of this.currentWords){
      console.log(`TEXT: ${pair[0]} | WEIGHT: ${pair[1]}`);
      newData.push(
        {text: pair[0], weight: pair[1]}
      );
    }
    this.data = newData;
    //console.log(await (await this.httpService.getWordsByTrainer('aking'))[0]);
  }

}
