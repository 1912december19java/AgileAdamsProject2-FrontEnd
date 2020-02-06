import { Trainer } from './trainer';
import { User } from './user';
import { AssociateService } from './associate.service';

export class Word {
    public word;
    public trainerUser = new Trainer('','','','','','');
    public userUser = new User();

    constructor(private httpService : AssociateService, Word : String){
        this.word = Word;
        this.trainerUser.username = this.httpService.targetTrainer.username;
        this.userUser.username = this.httpService.loggedInUser.username;
    }
}
