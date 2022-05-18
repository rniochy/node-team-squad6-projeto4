export default  class User {

    constructor(private fullname_: string, private email_:string, private senha_: string){

    }

     getFullName(){
          return this.fullname_
     }
     getEmail(){
          return this.email_
     }
     getSenha(){
          return this.senha_
     }
     
}