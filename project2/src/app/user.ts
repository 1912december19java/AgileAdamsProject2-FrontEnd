export class User{
    
    firstName: string;
    lastName: string;
    username?: string;
    passcode?: string;
    picture?: File;
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