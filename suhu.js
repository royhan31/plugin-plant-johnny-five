var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor({
    pin: "A0",
    freq: 3000
  });

  sensor.on("data", function() {
    //console.log(Math.round(this.value/38) + " C");
    console.log(Math.round(100 - ( (this.value/1023.00) * 100 )));
    //firebaseRef.set(this.value);
  });
});
