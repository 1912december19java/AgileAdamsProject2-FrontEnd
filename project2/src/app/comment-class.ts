import { User } from './user';
import { Trainer } from './trainer';

export class CommentClass {

    trainerUser : Trainer;
    userUser : User;
    commentText : string;
    datePosted: string;
    approval: string;

    constructor(newText : string, newDate : string, newApproval : string){

        this.commentText = newText;
        this.datePosted = newDate;
        this.approval = newApproval;
    }

}
