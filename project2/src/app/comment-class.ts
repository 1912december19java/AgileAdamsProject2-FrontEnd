import { User } from './user';
import { Trainer } from './trainer';

export class CommentClass {

    id: number;
    trainerUser : Trainer;
    userUser : User;
    commentText : string;
    datePosted: string;
    approval: string;

    constructor(id: number, newText : string, newDate : string, newApproval : string){

        this.id = id;
        this.commentText = newText;
        this.datePosted = newDate;
        this.approval = newApproval;
    }

}
