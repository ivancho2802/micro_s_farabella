const express = require('express');
const app = express();
//const UsersModel = require('./models/cliente').UsersModel;
const ClientCtrl = require('./controllers/cliente');

app.use(function (req, res, next) {
    console.log(req.headers.origin)
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin?req.headers.origin:'*'); 
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Date-Current');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.set('port', process.env.PORT || 3001);
app.use(express.json());


app.get('/', function(req, res) {
  res.send('Welcome !')
});
app.get('/cliente/:tipodocu/:docu', ClientCtrl.getCliente);
app.post('/cliente', ClientCtrl.crearCliente);

const server = app
  .listen(app.get('port'),() => {
  console.log('ServerWelcome '+app.get('port'))//'+  .ipserver+'
});
module.exports = server;
