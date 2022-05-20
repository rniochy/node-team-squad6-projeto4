export default  class User {

    constructor(private fullname_: string, private email_:string, private senha_: string){

    }

     get fullName(){
          return this.fullname_
     }
     get email(){
          return this.email_
     }
     get senha(){
          return this.senha_
     }
     
}