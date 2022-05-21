export default  class User {

    constructor(private fullname_: string, private email_:string, private password_: string){

    }

     get fullname(){
          return this.fullname_
     }
     get email(){
          return this.email_
     }
     get password(){
          return this.password_
     }
     
}