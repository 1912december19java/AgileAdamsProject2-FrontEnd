export class User{
    
    firstName?: string;
    lastName?: string;
    username?: string;
    passcode?: string;
    picture?: string;


    constructor(username?: string, passcode?: string, firstName?: string, lastName?: string, picture?: string){
        this.username = username;
        this.passcode = passcode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
    }
}



export const USER_MOCKS = [
    {
        username : "jDoe",
        passcode: "12345",
        firstName : "Jane",
        lastName : "Doe",        
        picture : ""
    },

    {
        userName : "pBrown",
        password : "12345",
        firstName : "Paul",
        lastName : "Brown",
        picture: ""        
    }

];