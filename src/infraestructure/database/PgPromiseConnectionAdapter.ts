import Connection from "./Connectionn";
import pgp from 'pg-promise'

export default class PgPromiseConnectionAdapter implements Connection {
    pgp: any

    constructor() {
        this.pgp = pgp()(`postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);
    }
    query(statement: string): Promise<any> {
        return this.pgp.query(statement);
    }
    close(): Promise<void> { 
        return this.pgp.$pool.end();
    }
}
