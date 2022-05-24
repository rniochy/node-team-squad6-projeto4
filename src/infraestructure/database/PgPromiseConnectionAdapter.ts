import Connection from "./Connectionn";
import pgp from 'pg-promise'

export default class PgPromiseConnectionAdapter implements Connection {
    pgp: any

    constructor() {
        const dbUser = process.env.DATABASE_USER;
        const dbPassword = process.env.DATABASE_PASSWORD;
        const dbName = process.env.DATABASE_NAME;
        console.log(dbName)
        this.pgp = pgp()(`postgres://${dbUser}:${dbPassword}@localhost:5432/${dbName}`);
    }
    query(statement: string): Promise<any> {
         return this.pgp.query(statement);
    }
    close(): Promise<void> {
        return this.pgp.$pool.end();
    }


}
