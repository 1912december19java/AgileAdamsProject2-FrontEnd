export class Trainer {

    firstName : string;
    lastName : string;
    location : string;
    curriculum : string;
    username: string;
    password: string;

    constructor(fName?: string, lName?: string, tLoc?: string, tCurr?: string, tUser? : string, tPass?: string ){
        this.firstName = fName;
        this.lastName = lName;
        this.username = tUser;
        this.password = tPass;
        this.location = tLoc;
        this.curriculum = tCurr;
    }
    
}