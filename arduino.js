const io = require('socket.io-client');
const five = require('johnny-five');
const config = require('./config');

// Connect to the socket server
const socket = io.connect(config.url);

const board = five.Board();

board.on('ready', function() {

  const led = new five.Led(13); // Set pin 13 for LED
  var servo = new five.Servo({
    pin: 10,
    startAt: 180
  });

  // Turn LED on when event led:on is received
  socket.on('led:on', function(){
    function handler(){
      servo.to(180)
    }
    servo.on('move:complete', handler);
    servo.to(0, 500);
  });

});
