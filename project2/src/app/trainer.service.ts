// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Trainer } from './trainer'


// @Injectable({
//   providedIn: 'root'
// })
// export class TrainerService {


//   constructor(public http: HttpClient) { }

//   public connectionUrl : string = "http://localhost:8080/Project2/trainers";
//   public trainer : Trainer = new Trainer('','','','');
  

//   getAllTrainerInfo() {
//     console.log("getAllTrainerInfo()") 
//     this.http.get(this.connectionUrl)
//     .subscribe((response: Trainer[])=>{

//       console.log(response);
//       console.log("test")
//       // for(let i=0; i<response.length; i++ ){
//       //   console.log(JSON.parse(response[i]));
//       // }
//     })
//    }


// }
