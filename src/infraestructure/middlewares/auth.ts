import {Response, Request, NextFunction} from 'express'
import jwt, {VerifyOptions } from 'jsonwebtoken'
import User from '../../domain/entinty/user'
import dotenv from 'dotenv'
dotenv.config()
 
const privateKey = process.env.PRIVATEKEY  as string
export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if(authHeader)  {
         const partsOfToken = authHeader.split(' ');
         if(!(partsOfToken.length ===2)) return res.status(401).send({msgError: "Token Error "});

         const [scheme, token] = partsOfToken;
         if(!/^Bearer$/i.test(scheme)) return res.status(401).send({msgErro: "No match token format"});

         jwt.verify(token, privateKey, (err, decode)=>{
              req.body.user = decode
            if(!decode) res.status(401).send({msgErro: "Token Invalid"});
            
            return next()
         })
    } else {
         return res.status(401).send({masgError : "No Token provided"});
    }

}

export const generateToken = ({email, id}: User) =>{
     return jwt.sign({email, id}, privateKey, {expiresIn: '1d'});
}

const verifyOptions: VerifyOptions = {
    algorithms: ['RS256'],
  };