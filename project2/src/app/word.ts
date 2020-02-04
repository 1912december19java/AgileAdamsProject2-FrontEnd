import { Trainer } from './trainer';
import { User } from './user';

export class Word {
    public word : string;
    public trainerUser : Trainer;
    public userUser : User;

    constructor(word : string, trainer : Trainer, user : User){
        this.word = word;
        this.trainerUser = trainer;
        this.userUser = user;
    }
}
