export class User{
    
    firstName?: string;
    lastName?: string;
    username?: string;
    passcode?: string;
    picture?: File;

    constructor(username?: string, passcode?: string, firstName?: string, lastName?: string, picture?: File){
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
        picture : null
    },

    {
        userName : "pBrown",
        password : "12345",
        firstName : "Paul",
        lastName : "Brown",
        picture: null        
    }

];