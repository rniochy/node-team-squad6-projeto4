import Connection from "./Connectionn";
import pgp from 'pg-promise'
import config from './../config/config';

export default class PgPromiseConnectionAdapter implements Connection {
    pgp: any

    constructor() {
        this.pgp = pgp()(`postgres://${config.DATABASE_USER}:${config.DATABASE_PASSWORD}@${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`);
    }
    query(statement: string): Promise<any> {
        return this.pgp.query(statement);
    }
    close(): Promise<void> {
        return this.pgp.$pool.end();
    }
}
