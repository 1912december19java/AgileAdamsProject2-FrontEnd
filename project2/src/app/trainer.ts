export class Trainer {

        
    firstName : string;
    lastName : string;
    location : string;
    curriculum : string;

    username: string;
    passcode: string;
    picture: File;

    constructor(username?: string, password?: string, firstName?: string, lastName?: string, location? : string, curriculum?: string ){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.curriculum = curriculum;
    }
}