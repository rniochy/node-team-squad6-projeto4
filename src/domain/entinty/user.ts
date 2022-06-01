export default  class User {

    constructor(private id_: string, private fullname_: string, private email_:string, private password_: string){ }
    
    get id(){ return this.id_}
     get fullname(){ return this.fullname_}
     get email(){ return this.email_}
     get password(){ return this.password_}
     
}