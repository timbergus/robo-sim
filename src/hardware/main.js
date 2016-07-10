const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const five = require('johnny-five');

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let board = new five.Board();

let leds = [];

board.on('ready', () => leds.push(new five.Led(13)));

app.get('/', (req, res) => res.status(200).end('API 1.0 working!'));

app.post('/led', (req, res) => {
    req.body.state === 'on' ? leds[req.body.index].on() : leds[req.body.index].off();
    res.status(200).end(`Led ${ req.body.index } is ${ req.body.state }.`);
});

let port = process.env.PORT || 3000;

let myServer = server.listen(port, () => console.log('API working at http://localhost:' + myServer.address().port));
