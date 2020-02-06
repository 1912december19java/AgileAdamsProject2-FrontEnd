import { Injectable } from '@angular/core';
import { CloudData } from 'angular-tag-cloud-module';

@Injectable({
  providedIn: 'root'
})
export class CloudRefreshService {

  cloudWords : CloudData[] = [];

  constructor() { }

  refreshCloud(){

  }
}
