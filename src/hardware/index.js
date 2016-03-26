import Koa from 'koa';
var _ = require('koa-route');
import five from 'johnny-five';

const app = new Koa();

let board = new five.Board();

let leds = [];

board.on('ready', () => leds.push(new five.Led(13)));

app.use(_.get('/on', ctx => {
    leds[0].on();
    ctx.body = '<h1>Led on!</h1>';
}));

app.use(_.get('/off', ctx => {
    leds[0].off();
    ctx.body = '<h1>Led off!</h1>';
}));

app.listen(3000);
