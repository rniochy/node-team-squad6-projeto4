export default class Mail{
    public from:string;
    public to:string;
    public subject:string;
    public body:string;

    constructor(from:string, to:string, subject:string, body:string){
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.body = body;
    }
}
