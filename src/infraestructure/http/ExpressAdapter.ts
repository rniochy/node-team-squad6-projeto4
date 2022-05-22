import Http from './http'
import express from 'express'

export default class ExpressAdapter implements Http {
    app: any;

    constructor(){
         this.app = express()
         this.app.use(express.json())
    }
    on(url?: string, callback?: Function): void {
        this.app['use'](url || null, callback)
    }
    listen(port: any): void {
        console.log("The server is running")
        this.app.listen(port)
    }
  
}