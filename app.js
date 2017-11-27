const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const itemRouter = require('./src/routes/itemRoutes');
const db = require('./src/db');

const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
require('./src/websocket')(wss);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/items', itemRouter);

app.get('/', function (req, res) {
    res.render('index');
});

server.listen(process.env.PORT || port, function listening() {
    console.log('Listening on %d', server.address().port);
});
