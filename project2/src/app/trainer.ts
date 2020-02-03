export class Trainer {

    firstName : string;
    lastName : string;
    location : string;
    curriculum : string;

    username: string;
    password: string;
    // constructor(tUser : string, tPass: string){
    //         this.username = tUser;
    //         this.password = tPass;
    //     }

    constructor(fName?: string, lName?: string, tLoc?: string, tCurr?: string, tUser? : string, tPass?: string ){
        this.firstName = fName;
        this.lastName = lName;
        this.username = tUser;
        this.password = tPass;
        this.location = tLoc;
        this.curriculum = tCurr;
    }
    

    // constructor(newFirstName : string, newLastName : string, newLocation : string, newCurriculum : string,tUser : string, tPass: string){
    //     this.firstName = newFirstName;
    //     this.lastName = newLastName;
    //     this.location = newLocation;
    //     this.curriculum = newCurriculum;
    //     this.username = tUser;
    //     this.password = tPass;
    // }

}
/*
export const TRAINERS_LIST = [
    {
        firstName: "Adam",
        lastName: "King",
        location: "Virginia",
        curriculum: "Java"
     
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        location: "Washington D.C",
        curriculum: "SQL"
      
    }
  ];*/