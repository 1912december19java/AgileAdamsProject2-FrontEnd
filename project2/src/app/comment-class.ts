export class CommentClass {

    posterName : string;
    text : string;
    postDate: string;

    constructor(newName : string, newText : string, newDate : string){
        this.posterName = newName;
        this.text = newText;
        this.postDate = newDate;
    }

}
