import Connection from "./Connectionn";
import pgp from 'pg-promise'

export default class PgPromiseConnectionAdapter implements Connection {
    pgp: any

    constructor(){
        this.pgp = pgp()("postgres://postgres:rodrigo@localhost:5432/user_control_system");
    }
    query(statement: string): Promise<any> {
         return this.pgp.query(statement);
    }
    close(): Promise<void> {
        return this.pgp.$pool.end();
    }


}
