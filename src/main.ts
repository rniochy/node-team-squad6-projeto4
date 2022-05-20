import ExpressAdapter from '../src/infraestructure/http/ExpressAdapter';

const http = new ExpressAdapter();

const PORT = process.env.PORT || 3000 

http.listen(PORT)