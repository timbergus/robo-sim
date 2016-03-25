import five from 'johnny-five';

let board = new five.Board();

board.on('ready', () => {
    // Create an Led on pin 13
    let led = new five.Led(13);
    // Blink every half second
    led.blink(500);
});
