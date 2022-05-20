import Http from './http'
import express from 'express'

export default class ExpressAdapter implements Http {
    app: any;

    constructor(){
         this.app = express()
    }
    on(method: string, url: string, callback: Function): void {
        this.app[method](url, async function(req:any, res:any){
                const output = await callback(req.params, req.body)
        })
    }
    listen(port: any): void {
        console.log("The server is running")
        this.app.listen(port)
    }

}