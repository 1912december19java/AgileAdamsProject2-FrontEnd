import { Trainer } from './trainer';
import { User } from './user';

export class Word {
    public word;
    public trainerUser = new Trainer('','','','','','');
    public userUser = new User();

    constructor(Word : String){
        this.word = Word;
        this.trainerUser.username = 'aking';
        this.userUser.username = 'dking';
    }
}
