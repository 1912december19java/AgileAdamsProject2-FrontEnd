import { Trainer } from './trainer';
import { User } from './user';
import { AssociateService } from './associate.service';

export class Word {
    public word;
    public trainerUser = new Trainer('','','','','','');
    public userUser = new User();

    constructor(newTrainerUser : Trainer, newUserUser : User, Word : String){
        this.word = Word;
        this.trainerUser = newTrainerUser;
        this.userUser = newUserUser;
    }
}
