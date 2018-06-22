const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();



const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db)
}).catch(err=> console.log(err));

app.get('/api/inventory', controller.get);
app.post('/api/product', controller.post);
// app.put();
// app.delete();

const port = process.env.port || 3000;
app.listen(port, ()=> {console.log(`Server listening on port ${port}.`);});