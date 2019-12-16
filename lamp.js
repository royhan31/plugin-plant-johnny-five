var five = require("johnny-five");
var io = require('socket.io-client');
var socket = io.connect('http://plug-plant.herokuapp.com/');
var board = new five.Board();

board.on("ready", function(){
  const led = new five.Led(12);

  socket.on('all tools', function(data){
    // for (var i = 0; i < data.length; i++) {
      if(data.lamp){
        led.on()
      }else {
        led.off()
      }
    // }
  });
});
